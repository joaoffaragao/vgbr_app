import "./App.css";
import ToastProvider from "./provider/toastyProvider";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <GlobalStyle />
        <MainRoutes />
      </ToastProvider>
    </div>
  );
}

export default App;
