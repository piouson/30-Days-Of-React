export const countryLabel = (country) => {
  if (country.match(/america/i)) {
    return "USA";
  } else if (country.match(/russia/i)) {
    return "Russia";
  } else {
    return country;
  }
};
