import React from "react";

import "./App.css";

import Routes from "./Routes";
import AuthContextProvider from "./context/authContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
