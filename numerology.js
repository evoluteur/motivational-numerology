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
	"Y": 0, // ?
	"Z": 1,
}

var equal = ' = ', 
	plus = ' + '

function purposeInfo(destiny, character){
	var m = meaning.purpose,
		sumOp = destiny + plus + character,
		sum = '' + eval(sumOp),
		txt = [m.func + equal + sumOp + equal + sum]
	
	sum = reduceNumber(sum, txt)

	return {
		title: m.title,
		number: sum,
		calc: txt,
		meaning: m[sum] || '',
	}
}

function nameInfo(name){
	var uName = name.toUpperCase(),
		uNameV = '',
		uNameC = '',
		num = [],
		numV = [],
		numC = [],
		ln = uName.length,
		prevLetterCat = null;

	function addV(letter, lNum){
		numV.push(lNum)
		uNameV += letter
		prevLetterCat = 0
	}
	function addC(letter, lNum){
		numC.push(lNum)
		uNameC += letter
		prevLetterCat = 1
	}

	if(name){
		for(var i=0;i<ln;i++){
			var letter = uName[i],
				lNum = letter2number[letter] || 0,
				cv = letterCV[letter]
			num.push(lNum)
			if(cv===1){
				addC(letter, lNum)
			}else if(cv===0){
				if(letter==='Y'){
					if(prevLetterCat===1){
						addV(letter, lNum)
					}else if(i<ln-1 && letterCV[uName[i+1]]===0){
						addC(letter, lNum)
					}else{
						addV(letter, lNum)
					}
				}else{
					addV(letter, lNum)
				}
			}else{
				addC(letter, 0)
				addV(letter, 0)
				prevLetterCat = null
			}
		}

		return {
			character: nameCalc('character', uName, num),
			soul: nameCalc('soul', uNameV, numV),
			agenda: nameCalc('agenda', uNameC, numC),
		}
	}
}

function nameCalc(category, name, nums){
	var txt = [], sumOp, sum;
	var m = meaning[category]

	if(name && name.replace(/ /, '')){
		txt.push(m.func + equal + name);
		sumOp = nums.join(plus);
		sum = ''+eval(sumOp);
		txt.push(sumOp.replace(/\+0\+/g, plus) + equal + sum)
		sum = reduceNumber(sum, txt)
	}else{
		txt = [m.func + ' = N/A = 0']
	}

	return {
		title: m.title,
		number: sum || 'N/A',
		meaning: m[sum] || '',
		calc: txt,
	}
}

function reduceNumber(number, steps){
	var sumOp;
	while(number.length>1 && number!=='11' && number!=='22'){
		sumOp = sumString(number)
		number = ''+eval(sumOp)
		steps.push(sumOp + equal + number) 
	}
	return number
}

function sumString(number){
	return (''+number).split('').join(plus);
}

function dateInfo(month, day, year){
	var m, txt, sum, sumOp, rpt={}, buffer;

	m = meaning.destiny
	buffer = month + plus + day + plus + year;
	sum = '' + eval(buffer);
	txt = [m.func + equal + buffer + equal + sum];
	sum = reduceNumber(sum, txt)
	rpt.destiny = {
		title: m.title,
		number: sum,
		meaning: m[sum],
		calc: txt,
	}

	m = meaning.personality
	rpt.personality = {
		title: m.title,
		number: day,
		meaning: m[day],
		calc: [m.func + equal + day],
	}

	m = meaning.attitude
	buffer = sumString(month) + plus + sumString(day)
	sum = '' + eval(buffer)
	txt = [m.func + equal + buffer + equal + sum]
	sum = reduceNumber(sum, txt)
	rpt.attitude = {
		title: m.title,
		number: sum,
		meaning: m[day],
		calc: txt,
	}

	return rpt
}

function fullInfo(name, month, day, year){
	var buffer = nameInfo(name),
		rpt = dateInfo(month, day, year);

	rpt.character = buffer.character
	rpt.soul = buffer.soul
	rpt.agenda = buffer.agenda
	rpt.purpose = purposeInfo(rpt.destiny.number, rpt.character.number)

	return rpt
}
