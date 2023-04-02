// Example 1

const s = "07:05:45PM";

function timeConversion(s) {
  let time = s.slice(0, 2);
  if (time === "12") {
    if (s.includes("AM")) {
      time = "00";
    }
  } else if (s.includes("PM")) {
    time = parseInt(time) + 12;
  }
  console.log(`${time}${s.slice(2, 8)}`);
}
timeConversion(s);


// Example 2

const t = "12:01:00AM";

function timeConversion(t) {
  let time = t.slice(0, 2);
  if (time === "12") {
    if (t.includes("AM")) {
      time = "00";
    }
  } else if (t.includes("PM")) {
    time = parseInt(time) + 12;
  }
  console.log(`${time}${t.slice(2, 8)}`);
}
timeConversion(t);
