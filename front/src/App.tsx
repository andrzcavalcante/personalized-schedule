import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider";
import { ContactProvider } from "./providers/ContactProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/GlobalStyle";
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </AuthProvider>
      <ToastContainer/>
    </>
  );
};

export default App;
