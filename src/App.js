import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import CustomCartProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <CustomCartProvider>
        <Navbar />
        <Items />
      </CustomCartProvider>
    </div>
  );
}

export default App;
