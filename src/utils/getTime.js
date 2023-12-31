function getTime(date) {
  const dateObject = new Date(date);
  const hour = dateObject.getHours();
  const min = dateObject.getMinutes();
  const sec = dateObject.getSeconds();
  const formattedTime = `${hour}:${min}:${sec}`;
  return formattedTime;
}

export default getTime;
