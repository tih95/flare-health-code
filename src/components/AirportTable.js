import AirportRow from './AirportRow.js';

import './AirportTable.css';

const AirportTable = ({ data, currentFlightStat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th>{currentFlightStat === 'Total' ? 'Total' : 'Mean'}</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((airportStats, idx) => {
            return <AirportRow key={idx} rowData={airportStats} />;
          })
        }
      </tbody>
    </table>
  );
};

export default AirportTable;
