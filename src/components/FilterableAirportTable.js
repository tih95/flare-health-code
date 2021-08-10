import { useState, useEffect } from 'react';
import axios from 'axios';

import AirportTable from './AirportTable';
import FilterOptions from './FilterOptions';

import { getAirportTableData } from './helpers.js';

import './FilterableAirportTable.css';

const FilterableAirportTable = () => {
  const [isLoading, setIsLoading] = useState();
  const [initialAirportData, setInitialAirportData] = useState(null);
  const [currentYear, setCurrentYear] = useState(2003);
  const [currentFlightStat, setCurrentFlightStat] =
    useState('Total');
  const [currentAirports, setCurrentAirports] = useState([]);

  // Fetch data from api and set it to initial state
  useEffect(() => {
    const fetchAirportData = async () => {
      setIsLoading(true);

      const response = await axios.get(
        'https://flare-code-exercise-data.s3.amazonaws.com/airlines.json'
      );

      setInitialAirportData(response.data);
      setIsLoading(false);
    };

    fetchAirportData();
  }, []);

  if (isLoading) {
    return <h1>Loading!</h1>;
  }

  if (initialAirportData === null) {
    return null;
  }

  // Get all airport options for select element.
  // (grab all airports for a specific month and year and map code to array)
  const allAirportOptions = initialAirportData
    .filter((airport) => airport.Time.Label === '2003/06')
    .map((airport) => airport.Airport.Code);

  // Function from helpers.js that structures the table data in the format we
  // need to pass to table and row components.
  const airportTableData = getAirportTableData(
    initialAirportData,
    currentYear,
    currentAirports,
    currentFlightStat
  );

  return (
    <div className="filterableAirportTable">
      <FilterOptions
        allAirportOptions={allAirportOptions}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
        currentFlightStat={currentFlightStat}
        setCurrentFlightStat={setCurrentFlightStat}
        currentAirports={currentAirports}
        setCurrentAirports={setCurrentAirports}
      />
      <AirportTable
        data={airportTableData}
        currentFlightStat={currentFlightStat}
      />
    </div>
  );
};

export default FilterableAirportTable;
