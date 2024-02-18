/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Week): boolean => {
  return day === Week.Saturday || day === Week.Sunday;
}

const check = Week.Tuesday

if (isWeekend(check)) {
  console.log('It is Weekend, you can sleep');
} else {
  console.log('Go to work!');
}