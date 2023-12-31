function getDate(date) {
  const apiDate = new Date(date);
  const day = apiDate.getDate().toString().padStart(2, "0");
  const month = (apiDate.getMonth() + 1).toString().padStart(2, "0");
  const year = apiDate.getFullYear();
  const formatedDate = `${day}-${month}-${year}`;
  return formatedDate;
}

export default getDate;
