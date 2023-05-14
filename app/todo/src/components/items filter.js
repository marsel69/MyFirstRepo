import React from "react";

class ItemsFilter extends React.Component {
    render(){

    return (
        <div className="container">
            <div className="btn-group" role="group"
            aria-label="Basic example">
                <button type="button"
                class="btn btn-info">All</button>
                <button type="button"
                class="btn btn-outline-secondary">Active</button>
                <button type="button"
                class="btn btn-outline-secondary">Done</button>

            </div>
        </div>
    );
    }
}             
export default ItemsFilter;