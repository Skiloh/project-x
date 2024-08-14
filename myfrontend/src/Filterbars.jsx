import './Bar.css';
import React, { useState, useEffect, useCallback } from "react";
import Select from 'react-select';

const FilterComponent = ({properties, onFilter}) => {
    const [selectedBedroom, setSelectedBedroom] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedType, setSelectedType] = useState('');


const bedroomOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
]

const locationOptions = [
    {value: 'Ngong', label: 'Ngong'},
    {value: 'Racecourse', label: 'Racecourse'},
    {value: 'Westlands', label: 'Westlands'},
    {value: 'Kilimani', label: 'Kilimani'},
    {value: 'Kileleshwa', label: 'Kileleshwa'},
]

const typeOptions = [
    {value: 'Apartment', label: 'Apartment'},
    {value: 'Bungalow', label: 'Bungalow'},
    {value: 'Mansion', label: 'Mansion'},
    {value: 'Villa', label: 'Villa'},
    {value: 'Duplex', label: 'Duplex'},
]

const handleFilter = useCallback(() => {
    let filteredProperties = properties;
    if (selectedBedroom) {
        filteredProperties = filteredProperties.filter(property => property.bedrooms === selectedBedroom);
    }
    if (selectedLocation) {
        filteredProperties = filteredProperties.filter(property => property.location === selectedLocation);
    }
    if (selectedType) {
        filteredProperties = filteredProperties.filter(property => property.type === selectedType);
    }
    onFilter(filteredProperties);
}, [selectedBedroom, selectedLocation, selectedType, properties, onFilter]);

useEffect (() => {
    handleFilter();
}, [handleFilter]);

return (
    <div className="dropdown-container">
      <div className="select-container">
        <Select
          options={bedroomOptions}
          value={selectedBedroom}
          onChange={setSelectedBedroom}
          placeholder="Bedrooms"
        />
      </div>
      <div className="select-container">
        <Select
          options={locationOptions}
          value={selectedLocation}
          onChange={setSelectedLocation}
          placeholder="Location"
        />
      </div>
      <div className="select-container">
        <Select
          options={typeOptions}
          value={selectedType}
          onChange={setSelectedType}
          placeholder="House type"
          />
      </div>
    </div>
  );
};


export default FilterComponent;