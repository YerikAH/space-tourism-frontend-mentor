/* components */
import CrewComponent from "./components/screen/CrewComponent";
import DestinationComponent from "./components/screen/DestinationComponent";
import HomeComponent from "./components/screen/HomeComponent";
import TechComponent from "./components/screen/TechComponent";

/* context */
import { FetchProvider } from "./context/fetchContext";

/* route */
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <FetchProvider>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/destination" element={<DestinationComponent />} />
          <Route path="/crew" element={<CrewComponent />} />
          <Route path="/technology" element={<TechComponent />} />
        </Routes>
      </FetchProvider>
    </>
  );
}

export default App;
