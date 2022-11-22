import "./App.css";
import ModalStaffProvider from "./provider/modalProvider";
import ToastProvider from "./provider/toastyProvider";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastProvider>
        <ModalStaffProvider>
          <MainRoutes />
        </ModalStaffProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
