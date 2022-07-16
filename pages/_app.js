import { Provider } from "react-redux";
import "../styles/globals.css";
import { createStore } from "redux";
import allReduser from "./reducer/type";

const store = createStore(
  allReduser
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
