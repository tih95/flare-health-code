import { useState, useEffect } from 'react';
import axios from 'axios';

import AirportTable from './AirportTable';
import FilterOptions from './FilterOptions';

import './FilterableAirportTable.css';

const FilterableAirportTable = () => {
  const [isLoading, setIsLoading] = useState();
  const [initialAirportData, setInitialAirportData] = useState(null);
  const [currentYear, setCurrentYear] = useState('2003');
  const [currentFlightStat, setCurrentFlightStat] =
    useState('number of flights');
  const [currentAirports, setCurrentAirports] = useState([]);

  // Fetch data from api and set it to initial state
  useEffect(() => {
    const fetchAirportData = async () => {
      setIsLoading(true);

      const response = await axios.get(
        'https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json'
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

  /* TODO: figure out how to structure the data passing into the table
     FILTER OUT YEAR, STAT, and airports) */
  const filteredAirports = initialAirportData.filter(
    (airport) => airport.Time.Year === currentYear
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
      <AirportTable data={filteredAirports} />
    </div>
  );
};

export default FilterableAirportTable;
