import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { store } from "@/features/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <Component {...pageProps} />
        <ToastContainer />
      </PayPalScriptProvider>
    </Provider>
  );
}
