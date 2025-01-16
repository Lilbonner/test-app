import './App.css';
import ProductList from "./components/productList.tsx";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Product Store</h1>
        </header>
        <main>
            <ProductList />
        </main>
      </div>
  );
}

export default App;
