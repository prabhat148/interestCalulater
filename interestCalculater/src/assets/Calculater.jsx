import React, { useState } from 'react';;

function InterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(1);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateInterest = () => {
    if (principal < 0 || rate < 0 || years < 0) {
      alert("Please enter non-negative values.");
      return;
    }

    let currentPrincipal = principal;
    const data = [];

    for (let year = 1; year <= years; year++) {
      const interest = (currentPrincipal * rate) / 100;
      currentPrincipal += interest;
      let principal = (currentPrincipal - interest).toFixed(2);
      data.push({
        year: year,
        interest: interest.toFixed(2),
        total: currentPrincipal.toFixed(2),
        principal:principal
      });
    }

    setYearlyData(data);
  };

  return (
    <div className=" bg-red-50  text-center  max-h-full">
     

           <h2 className="text-3xl font-bold underline">Interest Calculator</h2>
          <div className=' justify-between '>
                <div className=" m-3 ">
        <label htmlFor="principal">Principal Amount: ${principal}</label>
        <input
          type="range"
          id="principal"
          min="1"
          max="100000"
          step="100"
          value={principal}
          onChange={(e) => setPrincipal(parseInt(e.target.value, 10))}
        />
      </div>

      <div className="m-3">
        <label htmlFor="rate">Interest Rate (%): {rate}%</label>
        <input
          type="range"
          id="rate"
          min="5"
          max="20"
          step="0.5"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </div>

      <div className="m-3">
        <label htmlFor="years">Number of Years: {years}</label>
        <input
          type="range"
          id="years"
          min="1"
          max="40"
          step="1"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value, 10))}
        />
      </div>
      <button className=' btn-md bg-orange-500 rounded-lg  ' onClick={calculateInterest}>Calculate</button>

          </div>
     

          <h3 className=' mt-4 text-2xl font-bold'>Yearly Breakdown</h3>
      {yearlyData.length > 0 && (
        <div className='flex items-center justify-center max-w-screen-2xl  '>
          <table className=' table-sm' style={{width:"-webkit-fill-available"}}>
            <thead className=' '>
              <tr>
                <th>Year</th>
                <th>Principal Amount</th>
                <th>Interest Earned</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map((item) => (
                <tr key={item.year}>
                  <td>{item.year}</td>
                  <td>${item.principal}</td>
                  <td>${item.interest}</td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InterestCalculator;