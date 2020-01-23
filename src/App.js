import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

//Functional Component to implement Routing
const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

// Import All Pages into The Application Container
function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
