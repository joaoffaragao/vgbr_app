import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { AdmContext } from "../../provider/admProvider";
import Container from "./style";

const Staff = () => {
  const { adm, logOut, getProfile } = useContext(AdmContext);
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
            <button
              onClick={() => {
                console.log("sair");
                logOut();
                navigate("/login");
              }}
            >
              Sair
            </button>
          </header>
        </main>
      </Container>
    );
  }
};

export default Staff;
