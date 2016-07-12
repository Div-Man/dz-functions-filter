var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = ['1', 2, 'привет', 4, 5, 'loftschool', 6, 7],
noNumbers = ['это', 'массив', 'без', 'чисел'];
noElem = [];


function isNumber(val){
	return typeof val === 'number';
}

function isSimeTrue(source, filterFn){
	var result;

	for(var i = 0; i < source.length; i++){
		if(filterFn(source[i])){
			return result = true;
		}

		else if(!filterFn(source[i])){
			result = false
		}
	}

	if(source.length === 0){
        throw new Error ("Массив пустой")
  }

	return result
}


try{
	console.log(isSimeTrue(noElem, isNumber))
}

catch(e){
	console.error(e.message)
}