import { createContext, ReactNode, useState } from "react";
import BackgroundModal from "../../components/modais/BackgroundModal";
import NovoBan from "../../components/modais/novoBan";

interface IModalStaff {}

export const ModalStaffContext = createContext<IModalStaff>({} as IModalStaff);

interface IProps {
  children: ReactNode;
}

const ModalStaffProvider = ({ children }: IProps) => {
  const [novoBanEstado, SetNovoBanEstado] = useState(false);

  return (
    <ModalStaffContext.Provider value={{}}>
      <BackgroundModal>
        {novoBanEstado && <NovoBan />}
        {children}
      </BackgroundModal>
    </ModalStaffContext.Provider>
  );
};

export default ModalStaffProvider;
