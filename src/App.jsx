import "./components/style.css";
import Header from './components/Header.jsx';
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore,js";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <footer className="footer">
        &copy; {new Date().getFullYear()} Book Manager. All rights reserved.
      </footer>
    </Provider>
    </>
  )
}

export default App;
