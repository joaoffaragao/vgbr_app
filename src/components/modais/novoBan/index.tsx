import BackgroundModal from "../BackgroundModal";
import Container from "./style";
import { AiOutlineClose } from "react-icons/ai";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { ModalStaffContext } from "../../../provider/modalProvider";
import { useContext } from "react";
import { BanContext } from "../../../provider/banProvider";

const schema = yup
  .object({
    playerId: yup.string().required("Player id obrigatorio"),
    punicao: yup.number().required("O numero de dias e obrigatorio"),
    motivo: yup.string().required("Digite um motivo"),
  })
  .required();

export interface INewBanRequest {
  playerId: string;
  punicao: Number;
  motivo: string;
}

const NovoBan = () => {
  const { abrirFecharModalNovoban } = useContext(ModalStaffContext);
  const { novoBan } = useContext(BanContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewBanRequest>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: INewBanRequest) {
    novoBan(data);
  }

  return (
    <BackgroundModal>
      <Container>
        <header>
          <h1>Novo Ban</h1>
          <AiOutlineClose
            onClick={() => {
              abrirFecharModalNovoban();
            }}
            color="white"
            size={"2rem"}
          />
        </header>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="InputBox">
              <label htmlFor="email">Id do Jogador</label>
              <input
                placeholder={"Digite o id do jogador "}
                type="text"
                {...register("playerId")}
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
                {...register("punicao")}
              />
            </div>
            <div className="InputBox">
              <label htmlFor="password">Descriçao do ban</label>
              <textarea
                rows={6}
                placeholder={"Digite o motivo da puniçao"}
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
    </BackgroundModal>
  );
};

export default NovoBan;
