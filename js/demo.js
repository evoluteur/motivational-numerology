/*
  Motivational-Numerology
  (c) 2026 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

const langMap = {
  en: "",
  es: "-spanish",
  fr: "-french",
  de: "-german",
  pt: "-portuguese",
  it: "-italian",
  nl: "-dutch",
  tr: "-turkish",
  id: "-indonesian",
  jp: "-japanese",
  vi: "-vietnamese",
};

const dimensions = [
  "character",
  "soul",
  "agenda",
  "attitude",
  "personality",
  "destiny",
  "purpose",
];
const dimensionsName = ["character", "soul", "agenda"];
const dimensionsMain = [
  "character",
  "agenda",
  "attitude",
  "personality",
  "soul",
];

const showPurpose = true; // use showPurpose = true to show "Divine Purpose" number
const myNumbers = {};
let dest, char;

const mn = "Motivational Numerology";
function dateReport(month, day, year) {
  const cats = ["destiny", "personality", "attitude"];
  const d = parseInt(day);
  if (month && day && year && d > 0 && d < 32 && parseInt(year) > 0) {
    const info = dateInfo(month, day, year);
    cats.forEach((cat) => (myNumbers[cat] = info[cat]));
    dest = info.destiny.number;
    return cats.map((id) => htmlSection(info[id])).join("");
  }
  dest = "";
  cats.forEach((cat) => (myNumbers[cat] = null));
  myNumbers.purpose = null;
  return "";
}

function nameReport(name) {
  if (name) {
    var info = nameInfo(name);
    dimensionsName.forEach((cat) => (myNumbers[cat] = info[cat]));
    char = info.character.number;
    return dimensionsName.map((id) => htmlSection(info[id])).join("");
  } else {
    myNumbers.character = null;
    myNumbers.agenda = null;
    myNumbers.soul = null;
  }
  char = "";
  myNumbers.purpose = null;
  return "";
}

function purposeReport() {
  if (showPurpose) {
    const p = purposeInfo(dest, char);
    myNumbers.purpose = p;
    return dest && char ? htmlSection(p) : "";
  }
  myNumbers.purpose = null;
  return "";
}

const htmlMeaning = (number, meaning) =>
  '<div class="meaning"><div class="num c' +
  number +
  '">' +
  number +
  "</div><div>" +
  (meaning || "N/A") +
  "</div></div>";

const ms = (master, meaning) =>
  master ? `<span>(${meaning.master})</span>` : "";

function htmlSection(rpt) {
  let html = `<a name="${rpt.category}"></a>
  <article class="artnum c${rpt.number}">
    <h2>${rpt.title} = ${rpt.number} ${ms(rpt.master, meaning)}</h2>
    <div class="desc">${rpt.description}</div>`;
  if (rpt.meaning) {
    html += '<div class="calc">' + htmlMeaning(rpt.number, rpt.meaning);
  }
  html += "</article>";
  return html;
}

const elem = (id) => document.getElementById(id);
const getValue = (id) => elem(id).value || "";
const setValue = (id, value) => {
  elem(id).value = value || "";
};

function calcName(skipExtra) {
  const name = getValue("name");
  document.title = name ? `${mn} - ${name}` : mn;
  elem("report1").innerHTML = nameReport(name);
  if (!skipExtra) {
    calcExtra();
  }
}
function calcBDay() {
  elem("report2").innerHTML = dateReport(
    getValue("month"),
    getValue("day"),
    getValue("year")
  );
  calcExtra();
}
function calcExtra() {
  if (showPurpose) {
    elem("report3").innerHTML = purposeReport(getValue("name"));
  }

  // - Numbers on star
  elem("star-holder").innerHTML = Object.keys(myNumbers)
    .map((cat) => {
      if (myNumbers[cat]) {
        const num = myNumbers[cat].number;
        return `<a href="#${cat}"><div class="${cat} num c${num}">${num}<span>${myNumbers[cat].title}</span></div></a>`;
      }
      return "";
    })
    .join("");
  const css = "t0" + (myNumbers.destiny ? " c" + myNumbers.destiny.number : "");
  let h = `<span class="${css}"></span>`;
  dimensionsMain.forEach((cat, idx) => {
    const num = myNumbers[cat] ? myNumbers[cat].number : "";
    h += `<div class="t${idx + 1} k${num}"></div>`;
  });
  elem("star").innerHTML = h;

  // - Summary list of all numbers
  var numNumbers = [];
  const collectNumbers = (section) => (category) => {
    let cat = section[category];
    let number = cat ? parseInt(cat.number) : null;
    if (cat) {
      if (number > 0 && numNumbers.indexOf(number) < 0) {
        numNumbers.push(number);
      }
      number = cat.number2 ? parseInt(cat.number2) : null;
      if (number > 0 && numNumbers.indexOf(number) < 0) {
        numNumbers.push(number);
      }
    }
  };

  if (myNumbers) {
    dimensions.forEach(collectNumbers(myNumbers));
  }
  numNumbers = numNumbers.sort((a, b) => a - b);
  elem("allNumbers").innerHTML = numNumbers
    .map((num) => `<span class="num c${num}">${num}</span>`)
    .join("");
}

const fields = ["name", "month", "day", "year"];
function checkInfo() {
  const queryString = window.location.search;
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    let hasValue = false;
    fields.forEach((fid) => {
      const param = urlParams.get(fid);
      if (param) {
        setValue(fid, param);
        hasValue = true;
      }
    });
    if (hasValue) {
      calcName(true);
      calcBDay();
    }
  }
}

function goToLanguage(evt, language) {
  evt.stopPropagation();
  let url = "index" + langMap[language] + ".html?";
  fields.forEach((f) => {
    const pv = getValue(f);
    if (pv) {
      url += `${f}=${pv}&`;
    }
  });
  window.location.replace(url);
}
