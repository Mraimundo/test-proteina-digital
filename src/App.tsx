import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalSstyles from "./styles/global";
import RoutePages from "./routes";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
        <GlobalSstyles />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
