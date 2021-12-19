import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
