import React, { useState } from 'react';

const App201 = () => {
  const options = [
    { value: 'apple', name: '사과' },
    { value: 'banana', name: '바나나' },
    { value: 'orange', name: '오렌지' },
  ];

  const [selected, setSelected] = useState('');

  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  const defaultValue = 'banana';


  return (
    <>
      <h3>selected: {selected}</h3>
      <select onChange={handleChangeSelect}>
        <option value="1">0.1톤</option>
        <option value="2">0.2톤</option>
        <option value="3">0.3톤</option>
        <option value="4" selected={true}>0.4톤</option>
        <option value="5">0.5톤</option>
      </select>
      <hr/>
      <select onChange={handleChangeSelect}>
        {options.map((option) => (
          <option
            value={option.value}
            // selected={option.value == 'banana'}
            key={option.value}
            defaultValue={defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default App201;