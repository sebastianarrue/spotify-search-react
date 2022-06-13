import store from "./store/store";
import { Provider } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar></Sidebar>
        <Header></Header>
        <Main></Main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
