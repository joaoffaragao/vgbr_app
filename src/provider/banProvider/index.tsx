import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { INewBanRequest } from "../../components/modais/novoBan";
import { requestBanList } from "../../service/server/getBanList";
import { IBan, requestNewban } from "../../service/server/requestNewban";
import { AdmContext } from "../admProvider";
import { ModalStaffContext } from "../modalProvider";
import { ToastContext } from "../toastyProvider";

interface IBanData {
  novoBan: (data: INewBanRequest) => void;
  getListBan: (Token: string) => void;
  banList: IBan[]
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
        setBanList(newListBan)
      }
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }

  useEffect(()=>{
    getListBan();
  },[])

  return (
    <BanContext.Provider value={{ novoBan ,getListBan , banList}}>
      <Outlet />
    </BanContext.Provider>
  );
};

export default BanProvider;
