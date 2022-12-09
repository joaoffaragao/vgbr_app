import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AdmContext } from "../../../provider/admProvider";
import { ModalStaffContext } from "../../../provider/modalProvider";
import { ToastContext } from "../../../provider/toastyProvider";
import { IBan } from "../../../service/server/requestNewban";
import Background from "../BackgroundModal";
import Container from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";



const schema = yup
  .object({
    playerId: yup.string().required("Player id obrigatorio"),
    punicao: yup.number().required("O numero de dias e obrigatorio"),
    motivo: yup.string().required("Digite um motivo"),
  })
  .required();

export interface INewBanRequest {
    playerId: string;
    playerName: string;
    punicao: Number;
    motivo: string;
}
  

const EditBan = () =>{

    const { toastErro, toastSucesso } = useContext(ToastContext);
    const { abrirFecharModalEditarBan, banEdit } = useContext(ModalStaffContext);
    const { token } = useContext(AdmContext);
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<INewBanRequest>({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data: INewBanRequest) {
        console.log(data);
      }


    return(
        <Background>
            <Container>
            <header>
          <h1>Editar Ban</h1>
            <AiOutlineClose
                onClick={() => {
                    abrirFecharModalEditarBan({} as IBan);
                }}
                color="white"
                size={"2rem"}
          />
        </header>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="InputBox">
              <label htmlFor="id">Id do Jogador</label>
              <input
                 placeholder={banEdit.id}
                type="text"
                {...register("playerId")}
              />
              {errors.playerId?.message && (
                <p>{errors.playerId?.message?.toString()}</p>
              )}
            </div>
            <div className="InputBox">
              <label htmlFor="name">Apelido do Jogador</label>
              <input
                placeholder={banEdit.playerName}
                type="text"
                {...register("playerName")}
                value = {banEdit.playerName}
              />
              {errors.playerId?.message && (
                <p>{errors.playerId?.message?.toString()}</p>
              )}
            </div>
            <div className="InputBox">
              <label htmlFor="punicao">Dias de punição</label>
              <input
                placeholder={"Quantos dias de puniçao"}
                type="number"
                value = {banEdit.punicao}
                {...register("punicao")}
              />
            </div>
            <div className="InputBox">
              <label htmlFor="password">Descriçao do ban</label>
              <textarea
                rows={6}
                placeholder={"Digite o motivo da puniçao"}
                value = {banEdit.motivo}
                {...register("motivo")}
              />
              {errors.motivo?.message && (
                <p>{errors.motivo?.message?.toString()}</p>
              )}
            </div>
            <button>Adicionar</button>
          </form>
        </main>
            </Container>
        </Background>
    )
}

export default EditBan