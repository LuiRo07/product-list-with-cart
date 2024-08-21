import ListHeader from "./Components/UI/ListHeader";
import ProductList from "./Components/Modal/ProductList";
import Cart from "./Components//Modal/Cart";

function App() {
  return (
    <div className="p-10">
      <ListHeader />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
