import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductPage } from "./components/ProductPage";
import { ProductPreview } from "./components/ProductPreview";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <ProductPage />
      </div>
      {/* <div className="preview">

        <ProductPreview />

      </div> */}
    </div>
  );
}

export default App;
