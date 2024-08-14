// PropertyList.js
import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <p>{property.bedrooms} Bedrooms - {property.location} - {property.type}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
