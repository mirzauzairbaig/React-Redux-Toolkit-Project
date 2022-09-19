import Header from "./contenars/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./contenars/ProductListing";
import ProductDetail from "./contenars/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />}></Route>
          <Route
            path="/Product/:productId"
            exact
            element={<ProductDetail />}
          ></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
