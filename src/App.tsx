import Header from "./components/Header";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "./context/Cart";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
