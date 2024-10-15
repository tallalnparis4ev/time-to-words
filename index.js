const QUARTER_STRING = "quarter";
const HALF_STRING = "half";
const SECS_IN_MIN = 60;
const TO_STRING = "to";

const NumToWord = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  15: QUARTER_STRING,
  30: HALF_STRING,
  30: HALF_STRING,
};

const O_CLOCK_STRING = "o'clock";
const PAST_STRING = "past";

function numToString(hour) {
  return NumToWord[hour];
}

function addSpace(strings) {
  return strings.join(" ");
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time == "0:00") {
    return "midnight";
  }
  if (time == "12:00") {
    return "midday";
  }

  const [hourString, minuteString] = time.split(":");
  const hourNumber = Number(hourString);
  if (minuteString == "00") {
    return addSpace([numToString(hourNumber), O_CLOCK_STRING]);
  }

  const minuteNumber = Number(minuteString);

  if (minuteNumber <= 30) {
    return addSpace([
      numToString(minuteNumber),
      PAST_STRING,
      numToString(hourNumber),
    ]);
  }

  const newMinuteNumber = SECS_IN_MIN - minuteNumber;
  return addSpace([
    numToString(newMinuteNumber),
    TO_STRING,
    numToString(hourNumber + 1),
  ]);
}

module.exports = { convertTimeToWords };
