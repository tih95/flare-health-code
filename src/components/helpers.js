import { COLUMN_OPTIONS } from './constants';

const calculateStat = (foundAirportForMonth, currentFlightStat) => {
  const flattenedAirportObject = {
    ...foundAirportForMonth.Statistics['# of Delays'],
    ...foundAirportForMonth.Statistics['Flights']
  };

  const totalFlights = flattenedAirportObject['Total'];

  if (currentFlightStat === 'Total') {
    return totalFlights;
  }
  return `${(
    (flattenedAirportObject[currentFlightStat] / totalFlights) *
    100
  ).toFixed(2)}%`;
}

const calculateMeanForYear = (airportData, currentFlightStat) => {
  // Flatten each airport object in the array.
  const flattenedAirports = airportData.map((airport) => {
    return {
      ...airport.Statistics['# of Delays'],
      ...airport.Statistics.Flights
    };
  });

  const totalFlightsForYear = flattenedAirports.reduce((acc, cur) => {
    return acc + cur['Total'];
  }, 0);
  if (currentFlightStat === 'Total') {
    return totalFlightsForYear;
  }

  const totalStatCountForYear = flattenedAirports.reduce((acc, cur) => {
    return acc + cur[currentFlightStat];
  }, 0);

  return `${((totalStatCountForYear / totalFlightsForYear) * 100).toFixed(2)}%`;
}

const filterByAirportYear = (initialAirportData, currentYear) => {
  return initialAirportData.filter(
    (airport) => airport.Time.Year === currentYear
  );
};

const getSelectedAirports = (currentAirports, airportsByYear) => {
  return currentAirports.map((airportCode) => {
    return airportsByYear.filter((airportObj) => {
      return airportObj.Airport.Code === airportCode;
    });
  });
};

const getAirportRows = (selectedAirportsByYear, currentFlightStat) => {
  return selectedAirportsByYear.map((airportData) => {

    return Object.keys(COLUMN_OPTIONS).map((columnValue) => {
      if (columnValue === 'Airport') {
        return airportData[0].Airport.Code;
      }
      if (columnValue === 'Mean') {
        return calculateMeanForYear(airportData, currentFlightStat);
      }
      const foundAirportForMonth = airportData.find((airportObject) => {
        return airportObject.Time.Month === COLUMN_OPTIONS[columnValue];
      });
      if (!foundAirportForMonth) return 'N/A';
      return calculateStat(foundAirportForMonth, currentFlightStat);
    });

  });
};

// This is the primary function that is called within the FilterableAirportTable
// component. Inside this function calls all of the other helper functions to
// help structure the table data so that it can be rendered by the Table and
// Row components.
export const getAirportTableData = (
  initialAirportData,
  currentYear,
  currentAirports,
  currentFlightStat
) => {
  const filteredAirportsByYear = filterByAirportYear(
    initialAirportData,
    currentYear
  );
  const selectedAirportsByYear = getSelectedAirports(
    currentAirports,
    filteredAirportsByYear
  );

  const airportTableData = getAirportRows(
    selectedAirportsByYear,
    currentFlightStat
  );

  return airportTableData;
};
