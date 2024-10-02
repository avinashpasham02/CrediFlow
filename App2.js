import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [businessData, setBusinessData] = useState({ revenue: '', expenses: '' });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setBusinessData({ ...businessData, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/credit/assess', { businessData });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>MSME Credit Assessment</h1>
      <input
        type="number"
        name="revenue"
        placeholder="Revenue"
        value={businessData.revenue}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="expenses"
        placeholder="Expenses"
        value={businessData.expenses}
        onChange={handleInputChange}
      />
      <button onClick={submitData}>Submit</button>

      {result && (
        <div>
          <h3>Credit Score: {result.creditScore}</h3>
          <h4>Loan Recommendation: {result.recommendation}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
