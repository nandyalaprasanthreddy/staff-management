import "./App.css";
import Mainlayout from "./components/MainLayout";
import { Approutes } from "./routes/Approutes";
function App() {
  return (
    <>
      <Mainlayout role="admin">
        <Approutes />
      </Mainlayout>
    </>
  );
}

export default App;
