/*
  Motivational-Numerology
  (c) 2026 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

const elem = (id) => document.getElementById(id);
const getValue = (id) => elem(id).value || "";
const getNumValue = (id) => parseInt(getValue(id), 10);
const trim2C = (n) => {
  const sn = "" + n;
  return sn.length < 2 ? "0" + sn : sn;
};
const numRpt = (name, number) =>
  `<h2><div class="num c${number}">${number}</div> Personal ${name}</h2>`;

function calcPerso() {
  const now = new Date();
  const cMonth = now.getMonth() + 1;
  const cYear = now.getFullYear();
  const cDay = now.getDate();
  const m = getNumValue("month"),
    d = getNumValue("day");
  const bDay = new Date(cYear + "-" + trim2C(m) + "-" + trim2C(d));
  const isBeforeBDay = now - bDay < 0;

  let rpt = isBeforeBDay
    ? "Until your next birthday..."
    : "Since your birthday...";

  if (m > 0 && d > 0) {
    let pYear = m + d + cYear + (isBeforeBDay ? -1 : 0);
    pYear = reduceNumber("" + pYear);
    rpt += numRpt("Year", pYear);

    let pMonth = pYear + cMonth;
    pMonth = reduceNumber("" + pMonth);
    rpt += numRpt("Month", pMonth);

    let pDay = pMonth + cDay;
    pDay = reduceNumber("" + pDay);
    rpt += numRpt("Day", pDay);
  } else {
    rpt = "";
  }

  elem("report1").innerHTML = rpt;
}
