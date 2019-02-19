import * as React from "react";
import Header from "./components/header"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
