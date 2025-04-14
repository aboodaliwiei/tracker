
import React, { useState } from 'react';

const AlertSettings = ({ onSettingsChange }) => {
  const [type, setType] = useState('sound');
  const [range, setRange] = useState('equal');
  const [frequency, setFrequency] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsChange({ type, range, frequency });
  };

  return (
    <div>
      <h2>Customize Alerts</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Notification Type:
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="sound">Sound</option>
            <option value="email">Email</option>
            <option value="both">Both</option>
          </select>
        </label>
        <br />
        <label>
          Alert Condition:
          <select value={range} onChange={e => setRange(e.target.value)}>
            <option value="equal">Equals</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </label>
        <br />
        <label>
          Check Frequency (seconds):
          <input
            type="number"
            min="5"
            value={frequency}
            onChange={e => setFrequency(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default AlertSettings;
