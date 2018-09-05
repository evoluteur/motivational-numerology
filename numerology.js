// Motivational-Numerology

// letters to number map
var letter2number = {
	"A": 1,
	"B": 2,
	"C": 3,
	"D": 4,
	"E": 5,
	"F": 6,
	"G": 7,
	"H": 8,
	"I": 9,
	"J": 1,
	"K": 2,
	"L": 3,
	"M": 4,
	"N": 5,
	"O": 6,
	"P": 7,
	"Q": 8,
	"R": 9,
	"S": 1,
	"T": 2,
	"U": 3,
	"V": 4,
	"W": 5,
	"X": 6,
	"Y": 7,
	"Z": 8,
	' ': 0,
	'-': 0,
},
// Vowel/Consonant map
letterCV = {
	"A": 0,
	"B": 1,
	"C": 1,
	"D": 1,
	"E": 0,
	"F": 1,
	"G": 1,
	"H": 1,
	"I": 0,
	"J": 1,
	"K": 1,
	"L": 1,
	"M": 1,
	"N": 1,
	"O": 0,
	"P": 1,
	"Q": 1,
	"R": 1,
	"S": 1,
	"T": 1,
	"U": 0,
	"V": 1,
	"W": 1,
	"X": 1,
	"Y": 1, // ?
	"Z": 1,
},
plus = '<span class="spaced">+</span>',
equal = '<span class="spaced">=</span>',
br = '<br/>'

function nameReport(name){
	var uName = name.toUpperCase(),
		uNameV = '',
		uNameC = '',
		num = [],
		numV = [],
		numC = [];

	if(name){
		for(var i=0;i<uName.length;i++){
			var letter = uName[i],
				lNum = letter2number[letter] || 0
			num.push(lNum)
			if(letterCV[letter]==1){
				numC.push(lNum)
				uNameC += letter
			}else if(letterCV[letter]===0){
				numV.push(lNum)
				uNameV += letter
			}else{
				numC.push(0)
				numV.push(0)
				uNameC += letter
				uNameV += letter
			}
		}
		return nameCalc('Character', uName, num) + br +
				nameCalc('Soul Urge', uNameV, numV) + br +
				nameCalc('Hidden Agenda', uNameC, numC)
	}else{
		return ''
	}
}

function nameCalc(title, name, nums){
	var txt, sumStr, sum;
	if(name){
		txt = name + br;
		sumStr = nums.join('+');
		sum = ''+eval(sumStr);
		txt += sumStr.replace(/\+0\+/g, plus) + equal + sum
		while(sum.length>1 && sum!=='11' && sum!=='22'){
			sumStr = sumString(sum)
			sum = ''+eval(sumStr)
			txt += br + sumStr + equal + sum
		}
	}else{
		txt = 'N/A' + equal + '0'
	}
	return '<h2>' + title + equal + sum + '</h2>' + txt
}

function sumString(numSting){
	return numSting.split('').join('+');
}

function getValue(id, defaultVal){
	return document.getElementById(id).value || defaultVal;
}

function sumDigitsReduced(n) {
  return (n - 1) % 9 + 1;
}

function dateReport(nMonth, nDay, nYear){
	if(nMonth+nDay+nYear==='000'){
		return ''
	}
	var txt, sum,
		m = sumString(nMonth),
		d = sumString(nDay),
		y = sumString(nYear);

	function loopNumbers(){
		while(sum.length>1 && sum!=='11' && sum!=='22'){
			sumStr = sumString(sum);
			sum = '' + eval(sumStr);
			txt += br + sumStr + equal + sum;
		}
	}

	function numReduc(strNum){
		return strNum.length>1 ? ('('+sumString(strNum)+')') : strNum
	}

	txt = nMonth + plus + nDay + plus + nYear;
	sum = '' + eval([nMonth, nDay, nYear].join('+'));
	txt += equal + sum;
	loopNumbers()
	var destiny = '<h2>Destiny = ' + sum + '</h2>' + txt;

	var personality = '<h2>Personality = ' + nDay + '</h2>' + nDay;

	sum = '' + eval(numReduc(nMonth) + '+' + numReduc(nDay))
	txt = sumString(nMonth) + plus + sumString(nDay) + equal + sum
	loopNumbers()
	var attitude = '<h2>Attitude = ' + sum + '</h2>' + txt;

	return destiny + personality + attitude
}

function calcName(){
	document.getElementById('report1').innerHTML = nameReport(getValue('txt', ''));
}
function calcBDay(){
	document.getElementById('report2').innerHTML = dateReport(getValue('month', '0'), getValue('day', '0'), getValue('year', '0'));
}
