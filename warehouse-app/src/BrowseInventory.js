import logo from './logo.svg';
import './App.css';
import InventoryListing from "./components/InventoryListing"
import NavBar from "./components/NavBar"

function BrowseInventory() {
  return (
    <div className="App">
        <NavBar /> 
        <h1>Inventory Listing</h1>
        <InventoryListing maxVisible={22}/>
    </div>
  );
}

export default BrowseInventory;
