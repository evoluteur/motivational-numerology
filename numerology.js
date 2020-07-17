// Motivational-Numerology
// (c) 2020 Sally Faubion 
// http://www.sallysnumbers.com

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
	"Y": 0, // or 1
	"Z": 1,
}

var plus = '+'

function isMasterNumber(num) {
	return num == '11' || num == '22'
}

function makeReport(category, number) {
	var m = meaning[category]
	return {
		title: m.title,
		category: category,
		number: number,
		master: isMasterNumber(number),
		meaning: m[number],
		description: m.description,
	}
}

function purposeInfo(destiny, character){
	var sumOp = (destiny && character) ? (destiny + plus + character) : '',
		sum = reduceNumber(sumOp ? '' + eval(sumOp) : '')
	return makeReport('purpose', sum)
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
					}else if(i<ln-1){
						nextLetterCat = letterCV[uName[i+1]]
						if(nextLetterCat===1){
							addV(letter, lNum)
						}else{
							addC(letter, lNum)
						}					
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
	var sum='0';

	if(name && name.replace(/ /, '')){
		sum = reduceNumber(''+eval(nums.join(plus)))
	}
	return makeReport(category, sum)
}

function reduceNumber(number){
	if(number!='NaN' && number!='undefined'){
		while(number.length>1 && !isMasterNumber(number)){
			number = ''+eval((''+number).split('').join(plus))
		}
	}
	return number
}

function dateInfo(month, day, year){
	return {
		destiny: makeReport('destiny', reduceNumber(month+day+year)),
		personality: makeReport('personality', day),
		attitude: makeReport('attitude', reduceNumber(month+day))
	}
}

function fullInfo(name, month, day, year){
	var rpt = dateInfo(month, day, year),
		buffer = nameInfo(name)

	rpt.character = buffer.character
	rpt.soul = buffer.soul
	rpt.agenda = buffer.agenda
	rpt.purpose = purposeInfo(rpt.destiny.number, rpt.character.number)
	return rpt
}
