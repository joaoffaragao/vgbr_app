import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainRoutes />
    </div>
  );
}

export default App;
