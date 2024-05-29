import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <TextField name="category" label="Category" select value={filters.category} onChange={handleChange}>
        <MenuItem value="Phone">Phone</MenuItem>
        <MenuItem value="Laptop">Laptop</MenuItem>
        {/* Add more categories as needed */}
      </TextField>
      {/* Additional filters can be added here */}
    </div>
  );
};

export default Filter;
