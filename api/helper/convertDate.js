const moment = require('moment-timezone');

const formatDateName = 'DD-MM-YYYY';

const convertFormatDateName = (date) => {
  let localDate = moment.utc(date).local().format(formatDateName);
  return localDate;
};

const formatYears = 'YYYY';
const convertFormatYears = (year) => {
  let localYear = moment.utc(year).local().format(formatYears);
  return localYear;
};

const yearToMonthDate = 'YYYYMMDD';

const convertYearToMonthDate = (date) => {
  let dateMonth = moment.utc(date).local().format(yearToMonthDate);
  return dateMonth;
};
const localizedFormat = 'LLL';
const convertLocalized = (date) => {
  let dateMonth = moment.utc(date).local().format(localizedFormat);
  return dateMonth;
};

const convertLocalTime = (date) => {
  let newDate = moment.utc(date).local();
  return newDate;
};

const convertFormatDate = (date, formatDate = 'DD/MM/YYYY') => {
  return moment.utc(new Date(date)).local().format(formatDate);
};

module.exports = {
  convertFormatDateName,
  convertFormatYears,
  convertYearToMonthDate,
  convertLocalized,
  convertLocalTime,
  convertFormatDate
};