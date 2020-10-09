export const dateString = (dateObject) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[dateObject.getMonth()]
  const year = dateObject.getFullYear();
  const day = dateObject.getDate();

  return `${day < 10 ? '0'+day : day} ${month} ${year}`;
}