import InventoryListingItem from "./InventoryListingItem"
import React, {useState} from 'react';

function InventoryListing(props){
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    function previousPage() {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - props.maxVisible);
        }
    }
    function nextPage() {
        if (currentPageIndex + props.maxVisible < allListingItems.length) {
            setCurrentPageIndex(currentPageIndex + props.maxVisible);
        }
    }
    const buttonStyle = {
        width: "50%"
    }
    let styling={
        margin:"0 auto",
        width:"30vw",
        border:"0.2 solid black"
    }
    let allListingItems=[];
    for(let i=0;i<50;i++){
        allListingItems.push(<InventoryListingItem count={i}/>);
    }
    let visibleListingItems= allListingItems.slice(currentPageIndex, currentPageIndex+props.maxVisible);
    return(
        <div style={styling}>
            {visibleListingItems}
            <button style={buttonStyle} onClick={previousPage}>Previous</button><button style={buttonStyle} onClick={nextPage}>Next</button>
        </div>
    )
}
export default InventoryListing;