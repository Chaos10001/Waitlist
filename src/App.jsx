import Footer from "./component/Footer";
import Main from "./component/Main";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="bg-[#111111]">
      <ToastContainer />
      <Main />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
