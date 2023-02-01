/* components */
import CrewComponent from "./components/screen/CrewComponent";
import DestinationComponent from "./components/screen/DestinationComponent";
import HomeComponent from "./components/screen/HomeComponent";
import TechComponent from "./components/screen/TechComponent";

/* context */
import { FetchProvider } from "./context/fetchContext";

/* route */
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* styles */
import "./Animation.css";

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <FetchProvider>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="slide"
          timeout={10000}
        >
          <Routes location={location}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/destination" element={<DestinationComponent />} />
            <Route path="/crew" element={<CrewComponent />} />
            <Route path="/technology" element={<TechComponent />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </FetchProvider>
  );
}

export default App;
