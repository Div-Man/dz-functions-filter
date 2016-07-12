var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7],
noNumbers = ['это', 'массив', 'без', 'чисел'];
noElem = [];


function isNumber(val) {
        return typeof val === 'number';
    }
 

function isAllTrue(array, filterFn){
    var result;
    
    for(var i = 0; i < array.length; i++){

        if(!filterFn(array[i])){
     		
        	return result = false
		}
		else{
      		result = true
      }
    }
	

if(array.length === 0){
        throw new Error ("Массив пустой")
  }

	return result
}

try{
	console.log(isAllTrue(noElem, isNumber));
}

catch(e){
	console.error(e.message)
}
