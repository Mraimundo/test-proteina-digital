import { BrowserRouter } from "react-router-dom";

import GlobalSstyles from "./styles/global";
import RoutePages from "./routes";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RoutePages />
      </BrowserRouter>
      <GlobalSstyles />
    </>
  );
};

export default App;
