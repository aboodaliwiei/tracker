
import React, { useState } from 'react';

const Alerts = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeric = parseFloat(value);
    if (isNaN(numeric)) {
      alert('يرجى إدخال رقم صالح');
      return;
    }
    onCreate(numeric);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="أدخل السعر" />
      <button type="submit">أضف تنبيه</button>
    </form>
  );
};

export default Alerts;
