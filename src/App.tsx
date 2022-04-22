import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { QueryClient, QueryClientProvider } from "react-query";

import GlobalSstyles from "./styles/global";
import RoutePages from "./routes";
import { RepositoryProvider } from "./hooks/repository";

// const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <RepositoryProvider>
      <ChakraProvider>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
        <GlobalSstyles />
      </ChakraProvider>
    </RepositoryProvider>

    // <ReactQueryDevtools />
    // </QueryClientProvider>
  );
};

export default App;
