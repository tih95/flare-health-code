export const COLUMN_OPTIONS = {
  Airport: 0,
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
  Mean: 13
};

export const YEAR_OPTIONS = [
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016
];

// Trying to figure out way to automatically change stat_options when selecting
export const STAT_OPTIONS = {
  'number of flights': 'Total',
  '% of flights on time': 'On Time',
  '% of flights canceled': 'Cancelled',
  '% of flights diverted': 'Diverted',
  '% of flights delayed': 'Delayed',
  '% of flights delayed due to carrier delay': 'Carrier',
  '% of flights delayed due to late aircraft': 'Late Aircraft',
  '% of flights delayed due to weather': 'Weather',
  '% of flights delayed due to security': 'Security',
  '% of flights delayed due to air traffic control': 'National Aviation System'
};