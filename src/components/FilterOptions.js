import { YEAR_OPTIONS, STAT_OPTIONS } from './constants';

import './FilterOptions.css';

const FilterOptions = ({
  allAirportOptions,
  currentYear,
  setCurrentYear,
  currentFlightStat,
  setCurrentFlightStat,
  currentAirports,
  setCurrentAirports
}) => {
  const handleSelectAirport = (selectedOptions) => {
    setCurrentAirports(selectedOptions.map((option) => option.value));
  };

  return (
    <div className="filterOptionsRow">
      {/* TODO: implement stat option dropdown and know which stat to calculate
        initial idea is to have giant if and use certain stat as numerator / totalflights
      */}
      <div>
        <label>Show</label>
        <select
          id="stat"
          value={currentFlightStat}
          onChange={(e) => setCurrentFlightStat(e.target.value)}
        >
          {Object.keys(STAT_OPTIONS).map((stat) => {
            return (
              <option key={stat} value={STAT_OPTIONS[stat]}>
                {stat}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="year">for year</label>
        <select
          id="year"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        >
          {YEAR_OPTIONS.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <label htmlFor="airports">for these airports</label>
      <select
        multiple
        id="airports"
        value={currentAirports}
        onChange={(e) => handleSelectAirport([...e.target.selectedOptions])}
      >
        {allAirportOptions.map((airport) => {
          return (
            <option key={airport} value={airport}>
              {airport}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterOptions;
