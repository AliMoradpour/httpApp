import Discussion from "./Container/Discussion/Discussion";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
