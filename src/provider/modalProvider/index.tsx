import { createContext, ReactNode, useState } from "react";
import { IBan } from "../../service/server/requestNewban";

interface IModalStaff {
  abrirFecharModalNovoban: () => void;
  novoBanEstado: boolean;
  editBanEstado: boolean;
  abrirFecharModalEditarBan: (ban: IBan) => void;
  banEdit: IBan
}

export const ModalStaffContext = createContext<IModalStaff>({} as IModalStaff);

interface IProps {
  children: ReactNode;
}

const ModalStaffProvider = ({ children }: IProps) => {
  const [novoBanEstado, SetNovoBanEstado] = useState(false);
  const [editBanEstado, SeteditBanEstado] = useState(false);
  const [ banEdit , SetBanEdit] = useState<IBan>({} as IBan)
  
  function abrirFecharModalNovoban() {
    SetNovoBanEstado(!novoBanEstado);
  }
  function abrirFecharModalEditarBan(ban: IBan) {
    SetBanEdit(ban)
    SeteditBanEstado(!editBanEstado);
  }

  return (
    <ModalStaffContext.Provider
      value={{ novoBanEstado, abrirFecharModalNovoban , editBanEstado ,abrirFecharModalEditarBan, banEdit}}
    >
      {children}
    </ModalStaffContext.Provider>
  );
};

export default ModalStaffProvider;
