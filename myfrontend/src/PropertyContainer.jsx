//The property display card(continer)
import React from "react";
import './PropertyContainer.css';

const PropertyCard = () => {
    return (
        <div className="Property">
            <div>
                <img src="https://via.placeholder.com/200" alt="Property" />
            </div>
            <div>
                <span>{}</span>
                <div className="name">
                <h3>Property Name</h3>
                <p>Location</p>
                </div>
                <div className="price">
                <p>Price</p>
                </div>
                </div>
        </div>
    )
}
export default PropertyCard;