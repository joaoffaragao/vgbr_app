import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NovoBan from "../../components/modais/novoBan";
import { AdmContext } from "../../provider/admProvider";
import { ModalStaffContext } from "../../provider/modalProvider";
import Container from "./style";
import { FiLogOut } from "react-icons/fi";

const Staff = () => {
  const { adm, logOut, getProfile } = useContext(AdmContext);
  const { novoBanEstado, abrirFecharModalNovoban } =
    useContext(ModalStaffContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  if (!adm.nick) {
    return <Loading paginaAnterior="/loadig" />;
  } else {
    return (
      <Container>
        <Header string="/login" />
        <main>
          <header>
            <div className="nickBox">
              <h2>Staff:</h2>
              <h2>{adm.nick}</h2>
            </div>
            <FiLogOut
              size={32}
              onClick={() => {
                logOut();
                navigate("/login");
              }}
            />
          </header>
          <main>
            <button
              onClick={() => {
                abrirFecharModalNovoban();
              }}
            >
              novo ban
            </button>
            <button onClick={()=>{ navigate("/staff/banList")}}>Lista Banidos</button>
          </main>
        </main>
        {novoBanEstado && <NovoBan />}
      </Container>
    );
  }
};

export default Staff;
