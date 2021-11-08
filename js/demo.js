var showPurpose = true; // use showPurpose = true to show "Divine Purpose" number
var myNumbers = {};
var dest, char;

function dateReport(month, day, year) {
  const cats = ["destiny", "personality", "attitude"];
  const d = parseInt(day);
  if (month && day && year && d > 0 && d < 32 && parseInt(year) > 0) {
    var info = dateInfo(month, day, year);
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
  const cats = ["character", "soul", "agenda"];
  if (name) {
    var info = nameInfo(name);
    cats.forEach((cat) => (myNumbers[cat] = info[cat]));
    char = info.character.number;
    return cats
      .map(function (id) {
        return htmlSection(info[id]);
      })
      .join("");
  }
  char = "";
  cats.forEach((cat) => (myNumbers[cat] = null));
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

function htmlMeaning(number, meaning) {
  return (
    '<div class="meaning"><div class="num c' +
    number +
    '">' +
    number +
    "</div><div>" +
    (meaning || "N/A") +
    "</div></div>"
  );
}

function htmlSection(rpt) {
  html =
    '<a name="' +
    rpt.category +
    '"></a>' +
    '<article class="artnum c' +
    rpt.number +
    '""><h2>' +
    rpt.title +
    " = " +
    rpt.number +
    "</h2>" +
    '<div class="desc">' +
    rpt.description +
    "</div>";
  if (rpt.meaning) {
    html +=
      '<div class="calc">' +
      (rpt.master ? "<div>" + meaning.master + "</div>" : "") +
      htmlMeaning(rpt.number, rpt.meaning);
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
  elem("report1").innerHTML = nameReport(getValue("name"));
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
        return (
          '<a href="#' +
          cat +
          '"><div class="' +
          cat +
          " num c" +
          num +
          '">' +
          num +
          "<span>" +
          myNumbers[cat].title +
          "</span></div></a>"
        );
      }
      return "";
    })
    .join("");
  var h = "";
  if (myNumbers.destiny) {
    h +=
      '<span class="t0 c' +
      (myNumbers.destiny ? myNumbers.destiny.number : "") +
      '"></span>';
  } else {
    h += '<span class="t0"></span>';
  }
  ["character", "agenda", "attitude", "personality", "soul"].forEach(
    (cat, idx) => {
      const num = myNumbers[cat] ? myNumbers[cat].number : "";
      h += '<div class="t' + (idx + 1) + " k" + num + '"></div>';
    }
  );
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
    [
      "character",
      "soul",
      "agenda",
      "attitude",
      "personality",
      "destiny",
      "purpose",
    ].forEach(collectNumbers(myNumbers));
  }
  numNumbers = numNumbers.sort(function (a, b) {
    return a - b;
  });
  elem("allNumbers").innerHTML = numNumbers
    .map((num) => '<span class="num c' + num + '">' + num + "</span>")
    .join("");
}

function checkInfo() {
  const queryString = window.location.search;
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    const fields = ["name", "month", "day", "year"];
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

const langMap = {
  en: "",
  fr: "-french",
  tr: "-turkish",
};
function goToLanguage(evt, language) {
  evt.stopPropagation();
  let url = "index" + langMap[language] + ".html?";
  const props = ["name", "month", "day", "year"];
  props.forEach((prop) => {
    const pv = getValue(prop);
    if (pv) {
      url += prop + "=" + pv + "&";
    }
  });
  window.location.replace(url);
}
