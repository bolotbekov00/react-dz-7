import React, { useState, useCallback, useMemo } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const multiplyValue = useCallback(() => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      const multipliedValue = value * value;
      setResult(multipliedValue);
    } else {
      setResult(0);
    }
  }, [inputValue]);

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  useMemo(multiplyValue, [inputValue]);

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <p>Результат: {result}</p>
    </div>
  );
}

export default ;