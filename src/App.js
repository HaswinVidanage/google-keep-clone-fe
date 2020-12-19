import './App.css';
import AppContainer from './components/AppContainer';
import { createClient, Provider, dedupExchange, cacheExchange, fetchExchange } from 'urql';
import { retryExchange } from '@urql/exchange-retry';
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import {GetItem} from "./utils/localstorage";
import LOCAL_STORAGE_KEYS from "./const/localstorage";
import { light } from "./theme";

const client = createClient({
    url: process.env.REACT_APP_API_URL,
    fetchOptions:() => {
        const token = GetItem(LOCAL_STORAGE_KEYS.TOKEN);
        return  token ? {
            headers: { Authorization:  token},
        } :  {}
    },

    exchanges: [
        dedupExchange,
        cacheExchange,
        fetchExchange,
        retryExchange({
            retryIf: error => {
                if ((error && error.graphQLErrors.length > 0) || error.networkError) {
                    return true;
                }
            },
        }),
    ]
});


function App() {
  return (
      <>
          <ThemeProvider theme={light}>
              <CssBaseline />
              <div className="App">
                  <Provider value={client}>
                      <AppContainer/>
                  </Provider>
              </div>
          </ThemeProvider>
      </>
  );
}

export default App;
