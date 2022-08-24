import { useContext, useEffect } from "react";
import { UserContext } from "../../provider/UserProvider";
import { Container } from "./style";

const Testepage = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user.platformInfo) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  return (
    <Container>
      <header>
        <h1>VGBR</h1>
      </header>
      {user.platformInfo && (
        <main>
          <h2>{user.platformInfo.platformUserHandle}</h2>
          <img
            src={user.platformInfo.avatarUrl}
            alt={user.platformInfo.platformUserHandle}
          />
          <span>joao</span>
        </main>
      )}
    </Container>
  );
};

export default Testepage;
