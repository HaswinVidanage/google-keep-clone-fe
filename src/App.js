import logo from './logo.svg';
import './App.css';
import AppContainer from './components/AppContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { createClient, Provider } from 'urql';
import {GetItem} from "./utils/localstorage";
import LOCAL_STORAGE_KEYS from "./const/localstorage";

const token = GetItem(LOCAL_STORAGE_KEYS.TOKEN);

const client = createClient({
    url: 'http://localhost:8080/query',
    fetchOptions: {
        headers: { Authorization: token ? token : '' },
    },
});


function App() {
  return (
      <Router>
        <div className="App">
            <Provider value={client}>
                <AppContainer/>
            </Provider>
        </div>
      </Router>
  );
}

export default App;
