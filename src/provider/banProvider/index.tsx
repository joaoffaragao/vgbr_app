import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { INewBanRequest } from "../../components/modais/novoBan";
import { requestNewban } from "../../service/server/requestNewban";
import { AdmContext } from "../admProvider";
import { ModalStaffContext } from "../modalProvider";
import { ToastContext } from "../toastyProvider";

interface IBanData {
  novoBan: (data: INewBanRequest) => void;
}

export const BanContext = createContext<IBanData>({} as IBanData);

const BanProvider = () => {
  const { toastErro, toastSucesso } = useContext(ToastContext);
  const { abrirFecharModalNovoban } = useContext(ModalStaffContext);
  const { token } = useContext(AdmContext);
  async function novoBan(data: INewBanRequest) {
    try {
      await requestNewban(data, token);
      toastSucesso("ban adicionado com sucesso");
      abrirFecharModalNovoban();
    } catch (error: any) {
      console.log(error);
      toastErro(error.response.data.message);
    }
  }

  return (
    <BanContext.Provider value={{ novoBan }}>
      <Outlet />
    </BanContext.Provider>
  );
};

export default BanProvider;
