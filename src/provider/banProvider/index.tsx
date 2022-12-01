import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { INewBanRequest } from "../../components/modais/novoBan";
import { requestBanList } from "../../service/server/getBanList";
import { IBan, requestNewban } from "../../service/server/requestNewban";
import { AdmContext } from "../admProvider";
import { ModalStaffContext } from "../modalProvider";
import { ToastContext } from "../toastyProvider";
import { requestPerdoar} from "../../service/server/requestPerdoar"

interface IBanData {
  novoBan: (data: INewBanRequest) => void;
  getListBan: (Token: string) => void;
  banList: IBan[],
  perdoarBan: (ban:IBan) => void;
}

export const BanContext = createContext<IBanData>({} as IBanData);

const BanProvider = () => {
  const { toastErro, toastSucesso } = useContext(ToastContext);
  const { abrirFecharModalNovoban } = useContext(ModalStaffContext);
  const { token } = useContext(AdmContext);


  const [banList , setBanList] = useState<IBan[]>([])

  async function novoBan(data: INewBanRequest) {
    try {
      await requestNewban(data, token);
      toastSucesso("ban adicionado com sucesso");
      abrirFecharModalNovoban();
      getListBan();
    } catch (error: any) {
      console.log(error);
      toastErro(error.response.data.message);
    }
  }

  async function getListBan() {
    const TokenArmazeado = localStorage.getItem("vgbr:token");
    
    try {
      if(TokenArmazeado){
        const newListBan = await requestBanList(TokenArmazeado)

        const listaPerdao = newListBan.filter((ban)=>{
          return verificaBan(ban)
        })

        listaPerdao.forEach(async (ban)=>{
            await requestPerdoar(ban.id,TokenArmazeado)
        })

        const ListBanUpdated = await requestBanList(TokenArmazeado)
        setBanList(ListBanUpdated)
      }
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }

  function verificaBan(ban: IBan){
    const d1  = new Date();
    const d2    = new Date(ban.created!);
    const diffInMs   = new Date(d1).getTime() - new Date(d2).getTime() 
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const diasRestantes = ban.punicao - diffInDays

    const diasRestantesRound = Math.round(diasRestantes);

    return diasRestantesRound <= 0
  }

  async function perdoarBan(ban: IBan) {
    const TokenArmazeado = localStorage.getItem("vgbr:token");
    try {
      if(TokenArmazeado){
        await requestPerdoar(ban.id,TokenArmazeado)
        await getListBan();
      }
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }

  useEffect(()=>{
    getListBan();
  },[])

  return (
    <BanContext.Provider value={{ novoBan ,getListBan,perdoarBan , banList}}>
      <Outlet />
    </BanContext.Provider>
  );
};

export default BanProvider;
