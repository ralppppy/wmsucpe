import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { AppProvider } from "../context/AppContext";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
