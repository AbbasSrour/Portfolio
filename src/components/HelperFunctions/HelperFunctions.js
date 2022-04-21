export var phase0, phase1, phase2;

export function waitFor(conditionFunction) {
  const poll = (resolve) => {
    if (conditionFunction()) resolve();
    else setTimeout((_) => poll(resolve), 400);
  };
  return new Promise(poll);
}
// waitFor((_) => var === bool).then((_) => {
// });
// async function demo() {
//   await waitFor((_) => var === bool);
// }

export function getAge(value) {
  var startDate = new Date(new Date(2001, 0, 4).toISOString().substr(0, 10));
  var endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  var endDate = new Date(endingDate);
  if (startDate > endDate) {
    var swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  var startYear = startDate.getFullYear();
  var february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  if (value === 0) return yearDiff;
  else if (value === 1) return monthDiff;
  else if (value === 2) return dayDiff;
}
