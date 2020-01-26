import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

/**
 * Functional Component to implement Routing
 * Use Route(<Route />) empty tag to link pages
 *
 */

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

// Import All Pages into The Application Container
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
