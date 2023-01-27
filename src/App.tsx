import CrewComponent from "./components/screen/CrewComponent";
import DestinationComponent from "./components/screen/DestinationComponent";
import HomeComponent from "./components/screen/HomeComponent";
import TechComponent from "./components/screen/TechComponent";
import { FetchProvider } from "./context/fetchContext";

function App() {
  return (
    <FetchProvider>
      <DestinationComponent />
    </FetchProvider>
  );
}

export default App;
