import './AirportTable.css';

const AirportTable = ({ data }) => {
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
          <th>Mean</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default AirportTable;
