import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App text-center">
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
