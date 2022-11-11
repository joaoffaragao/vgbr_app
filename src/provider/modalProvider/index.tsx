import { createContext, ReactNode, useState } from "react";
import BackgroundModal from "../../components/modais/BackgroundModal";
import NovoBan from "../../components/modais/novoBan";

interface IModalStaff {
  abrirFecharModalNovoban: () => void;
  novoBanEstado: boolean;
}

export const ModalStaffContext = createContext<IModalStaff>({} as IModalStaff);

interface IProps {
  children: ReactNode;
}

const ModalStaffProvider = ({ children }: IProps) => {
  const [novoBanEstado, SetNovoBanEstado] = useState(true);

  function abrirFecharModalNovoban() {
    SetNovoBanEstado(!novoBanEstado);
  }

  return (
    <ModalStaffContext.Provider
      value={{ novoBanEstado, abrirFecharModalNovoban }}
    >
      {children}
    </ModalStaffContext.Provider>
  );
};

export default ModalStaffProvider;
