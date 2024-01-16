import "./InventoryListingItem.css"
function InventoryListingItem(props){
    return(
        <div className="listing-item">
            <span className="listing-item-name">Socks</span><span className="listing-item-count">{props.count}</span>
        </div>
    )
}
export default InventoryListingItem;