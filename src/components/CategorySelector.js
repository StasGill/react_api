import React from 'react';

const CategorySelector = ({ option, onChange, value }) => (
  <select value={value} onChange={onChange}>
    {option.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
export default CategorySelector;
