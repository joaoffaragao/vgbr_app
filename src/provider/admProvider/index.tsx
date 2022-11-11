import { useState } from "react";
import { createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import getProfileRequest from "../../service/getProfileRequest";

import { useForm } from "react-hook-form";

export interface IAdm {
  id: string;

  nick: string;

  email: string;

  password: string;

  createdAt: Date;

  updatedAt: Date;

  isActive: boolean;

  isAdm: boolean;
}

interface IAdmContext {
  adm: IAdm;
  getProfile: () => void;
  token: string;
  addToken: (token: string) => void;
}

export const AdmContext = createContext<IAdmContext>({} as IAdmContext);

const AdmProvider = () => {
  const navigate = useNavigate();

  const [adm, setAdm] = useState<IAdm>({} as IAdm);

  const [token, setToken] = useState("");

  async function getProfile() {
    try {
      const TokenArmazeado = localStorage.getItem("vgbr:token");

      if (TokenArmazeado) {
        const adm = await getProfileRequest(TokenArmazeado);
        setAdm(adm);
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  }

  async function addToken(token: string) {
    setToken(token);
  }

  return (
    <AdmContext.Provider value={{ adm, getProfile, token, addToken }}>
      <Outlet />
    </AdmContext.Provider>
  );
};

export default AdmProvider;
