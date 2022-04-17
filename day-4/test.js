const time = "12:10AM";

function convertTo24HrsFormat(time) {
  let [hour, modifier] = time.split(":");
  let min = parseInt(modifier).toString().padStart(2, "0");
  let index = modifier.toLowerCase().indexOf("m");
  let meridian = modifier.slice(index - 1);
  hour = parseInt(hour);

  if (hour === 12) {
    hour = 00;
  }

  if (meridian == "PM") {
    hour = hour + 12;
  }

  hour = hour.toString().padStart(2, "0");

  let time24hr = `${hour}:${min}`;

  return time24hr;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
