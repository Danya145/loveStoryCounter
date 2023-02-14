function holiday(patience) {
  let result = "C праздником";
  result += " " + patience;
}

const numberToDay = {
  0: "Воскресенье",
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
};

const numberToMonth = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const years = ["год", "года", "лет"];
const months = ["месяц", "месяца", "месяцев"];
const days = ["день", "дня", "дней"];

//change number of date to string
function yearString(year) {
  if (year <= 20) {
    year === 1 ? (year += " " + years[0]) : year;
    year > 1 && year < 5 ? (year += " " + years[1]) : year;
    year >= 5 ? (year += " " + years[2]) : year;

    return year;
  } else {
    year % 10 === 1 ? (year += " " + years[0]) : year;
    year % 10 > 1 && year % 10 < 5 ? (year += " " + years[1]) : year;
    year % 10 >= 5 ? (year += " " + years[2]) : year;

    return year;
  }
}
function monthString(month) {
  if (month <= 20) {
    month === 1 ? (month += " " + months[0]) : month;
    month > 1 && month < 5 ? (month += " " + months[1]) : month;
    month >= 5 ? (month += " " + months[2]) : month;

    return month;
  } else {
    month % 10 === 1 ? (month += " " + months[0]) : month;
    month % 10 > 1 && month % 10 < 5 ? (month += " " + months[1]) : month;
    month % 10 >= 5 ? (month += " " + months[2]) : month;

    return month;
  }
}
function dayString(day) {
  if (day <= 20) {
    day === 1 ? (day += " " + days[0]) : day;
    day > 1 && day < 5 ? (day += " " + days[1]) : day;
    day >= 5 ? (day += " " + days[2]) : day;

    return day;
  } else {
    day % 10 === 1 ? (day += " " + days[0]) : day;
    day % 10 > 1 && day % 10 < 5 ? (day += " " + days[1]) : day;
    day % 10 >= 5 ? (day += " " + days[2]) : day;

    return day;
  }
}

//change month number to word
function numberMonth(month) {
  for (let key in numberToMonth) {
    key = Number(key);
    key === month ? (month = numberToMonth[key]) : month;
  }
  return month;
}

//now time
const today = "Сегодня";
function nowClock() {
  let date = new Date(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.getElementById("nowClock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function nowDate() {
  let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    dayNumber = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  month = numberMonth(month);
  document.getElementById("nowDay").innerHTML = today + " " + dayNumber + " " + month + " " + year;
}

//first meet
const ourMeet = "Мы познакомились";
const firstDate = new Date(2019, 4, 8, 23, 41, 28);

function firstMeetDate() {
  let year = firstDate.getFullYear(),
    month = firstDate.getMonth(),
    dayNumber = firstDate.getDate() < 10 ? "0" + firstDate.getDate() : firstDate.getDate();
  month = numberMonth(month);
  document.getElementById("firstMeetDay").innerHTML =
    ourMeet + " " + dayNumber + " " + month + " " + year;
}

function firstMeetClock() {
  let hours = firstDate.getHours() < 10 ? "0" + firstDate.getHours() : firstDate.getHours(),
    minutes = firstDate.getMinutes() < 10 ? "0" + firstDate.getMinutes() : firstDate.getMinutes(),
    seconds = firstDate.getSeconds() < 10 ? "0" + firstDate.getSeconds() : firstDate.getSeconds();
  document.getElementById("firstMeetClock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

//friendship duration
const friendHeading = "Мы знакомы";
const friendHolidayHeading = "Нам";
function friendDuration() {
  let date = new Date(),
    year = date.getFullYear() - firstDate.getFullYear(),
    month = date.getMonth() - firstDate.getMonth(),
    dayNumber = date.getDate() - firstDate.getDate();

  year === 0 ? (year = "\0") : year;
  month < 0 ? (month += 12) && (year -= 1) : month;
  dayNumber < 0 ? (dayNumber += monthDays[month]) && (month -= 1) : dayNumber;

  const strMonth = monthString(month);
  const strYear = yearString(year);
  const inMonthes = monthString(year * 12 + month);

  if (dayNumber === 0) {
    const output = `${friendHolidayHeading} ${strYear} и ${strMonth} или целых ${inMonthes}`;
    holiday(output);
    document.getElementById("friendDurationDay").innerHTML = output;
  } else {
    dayNumber = dayString(dayNumber);

    document.getElementById("friendDurationDay").innerHTML =
      friendHeading + " " + strYear + " " + strMonth + " " + dayNumber;
  }

  //time
  let hours = date.getHours() - firstDate.getHours();
  let minutes = date.getMinutes() - firstDate.getMinutes();
  let seconds = date.getSeconds() - firstDate.getSeconds();

  seconds < 0 ? (seconds += 60) && (minutes -= 1) : seconds;
  minutes < 0 ? (minutes += 60) && (hours -= 1) : minutes;
  hours < 0 ? (hours += 24) && (dayNumber -= 1) : hours;

  hours < 10 ? (hours = "0" + hours) : hours;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  seconds < 10 ? (seconds = "0" + seconds) : seconds;

  if (dayNumber !== 0) {
    document.getElementById("friendDurationClock").innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}

//love start
const ourLove = "Мы начали встречаться";
const love = new Date(2019, 11, 28, 0, 13, 25);

function loveDate() {
  let year = love.getFullYear(),
    month = love.getMonth(),
    dayNumber = love.getDate() < 10 ? "0" + love.getDate() : love.getDate();
  month = numberMonth(month);
  document.getElementById("loveDay").innerHTML =
    ourLove + " " + dayNumber + " " + month + " " + year;
}

function loveClock() {
  let hours = love.getHours() < 10 ? "0" + love.getHours() : love.getHours(),
    minutes = love.getMinutes() < 10 ? "0" + love.getMinutes() : love.getMinutes(),
    seconds = love.getSeconds() < 10 ? "0" + love.getSeconds() : love.getSeconds();
  document.getElementById("loveClock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

//
//
///////calculate duration of period
//love duration
const heading = "Мы встречаемся";
const holidayHeading = "Нам";
function loveDuration() {
  let date = new Date(),
    year = date.getFullYear() - love.getFullYear(),
    month = date.getMonth() - love.getMonth(),
    dayNumber = date.getDate() - love.getDate();

  month < 0 ? (month += 12) && (year -= 1) : month;
  dayNumber < 0 ? (dayNumber += monthDays[month]) && (month -= 1) : dayNumber;
  year === 0 ? (year = "\0") : year;
  const strMonth = monthString(month);
  const strYear = yearString(year);
  const inMonthes = monthString(year * 12 + month);

  if (dayNumber === 0) {
    const output = `${holidayHeading} ${strYear} и ${strMonth} или целых ${inMonthes}`;
    holiday(output);
    document.getElementById("loveDurationDay").innerHTML = output
  } else {
    dayNumber = dayString(dayNumber);

    document.getElementById("loveDurationDay").innerHTML =
      heading + " " + year + " " + month + " " + dayNumber;
  }

  //time
  let hours = date.getHours() - love.getHours();
  let minutes = date.getMinutes() - love.getMinutes();
  let seconds = date.getSeconds() - love.getSeconds();

  seconds < 0 ? (seconds += 60) && (minutes -= 1) : seconds;
  minutes < 0 ? (minutes += 60) && (hours -= 1) : minutes;
  hours < 0 ? (hours += 24) && (dayNumber -= 1) : hours;

  hours < 10 ? (hours = "0" + hours) : hours;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  seconds < 10 ? (seconds = "0" + seconds) : seconds;

  if(dayNumber !== 0){
    document.getElementById("loveDurationClock").innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}

//All holidays
const now = new Date();
const nowDayMonth = [now.getDate(), now.getMonth()];

function holidays() {
  february();

  march();

  urHB();

  myHB();
}
//14 february
const fourteenFebruary = "С 14 февраля  Солнышко!!!";
const feb = [14, 1];

function february() {
  if (nowDayMonth[0] === feb[0] && nowDayMonth[1] === feb[1]) {
    document.getElementById("holDay").textContent = fourteenFebruary;
  }
}

//8 march
const eightMarch = "С 8 Марта Бусинка моя!!!";
const mar = [8, 2];

function march() {
  if (nowDay === mar[0] && nowMonth === mar[1]) {
    document.getElementById("holDay").textContent = eightMarch;
  }
}

//ur hb
const urDay = "С ДНЁМ РОЖДЕНИЯ, Моя красавица!!!";
const urBirth = [14, 9];

function urHB() {
  if (nowDayMonth[0] === urBirth[0] && nowDayMonth[1] === urBirth[1]) {
    document.getElementById("holDay").textContent = urDay;
  }
}

//my hb
const myDay = "С ДНЁМ РОЖДЕНИЯ, Моя красавица!!!";
const myBirth = [24, 11];

function myHB() {
  if (nowDayMonth[0] === myBirth[0] && nowDayMonth[1] === myBirth[1]) {
    document.getElementById("holDay").textContent = myDay;
  }
}
