function compareTime(timeString1, timeString2) {
  let currentDateTime = new Date();
  let dateTime1 = new Date(timeString1);
  let dateTime2 = new Date(timeString2);
  currentDateTime.setHours(currentDateTime.getHours() + 24);
  if (
    dateTime1.getTime() >= currentDateTime.getTime() &&
    dateTime2.getTime() >= currentDateTime.getTime()
  ) {
    return dateTime1.getTime() > dateTime2.getTime(); 
  }
  return false;
}
module.exports = {
  compareTime,
};