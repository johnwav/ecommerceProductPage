import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductPage } from "./components/ProductPage";

function App() {

  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
