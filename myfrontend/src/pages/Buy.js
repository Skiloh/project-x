import React, { useState } from 'react';
import Navbar from '../Navbar'; 
import Footer from '../Footer';
import FilterComponent from '../Filterbars';
import PropertyList from '../Propertylist'; 
import PropertyCard from '../PropertyContainer';
const Buy = () => {
  const properties = [
    { id: 1, bedrooms: 2, location: 'New York', type: 'Apartment' },
    { id: 2, bedrooms: 3, location: 'San Francisco', type: 'House' },
    { id: 3, bedrooms: 1, location: 'Los Angeles', type: 'Studio' },
    // ... more data
  ];

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filtered) => {
    setFilteredProperties(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="dropdown-container">
        <FilterComponent properties={properties} onFilter={handleFilter} />
      </div>
      <div className='container'> 
        <PropertyCard />
        </div>
      <div className="content">
        <PropertyList properties={filteredProperties} />
      </div>
      <Footer />
    </>
  );
};

export default Buy;
