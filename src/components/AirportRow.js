const AirportRow = ({ rowData }) => {
  return (
    <tr>
      {
        rowData.map((column, idx) => {
          return <td key={idx}>{column}</td>;
        })
      }
    </tr>
  );
};

export default AirportRow;
