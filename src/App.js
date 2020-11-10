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

const client = createClient({
    url: 'http://localhost:8080/query',
    fetchOptions: {
        headers: { Authorization: 'test' },
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
