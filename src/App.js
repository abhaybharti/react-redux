import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import ProductDetails from "./component/ProductDetails";

import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
