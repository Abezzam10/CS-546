const questionOne = function questionOne(arr) {
    // Implement question 1 here
    //Edge cases first

    //Length checker
    if(arr.length != 3) {
        throw "Sorry! Array must have 3 arguments as input";    
    }
    //Implementation
    var sumof_squares = 0;
    
	for (side = 0; side < arr.length; side++) {
		sumof_squares += arr[side] * arr[side];
	}
	return sumof_squares;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    //error checking
    if (isNaN(num)) return "num is not a number";

    if (num < 1) return 0;      //condition for num < 1 return 0
    if (num === 1) return 1;   // condition for num === 1 (ie) same type matching as well 
    return questionTwo(num - 1) + questionTwo(num - 2);         //recursive solution
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    //error handling
    if(typeof(text) != "string"){
        throw 'This not a string!'
    }
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  //define vowels as const
    
    var count = 0;                           //initialize count
    for (let i of text.toLowerCase()) {     //introduce a variable "i" and convert to lowercase
        if (vowels.includes(i)) {          //if i in vowels
            count++;                      //increment counter
        }
    }
    return count;           
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    //error checking
    if(typeof(num) !== "number") return "Not a number";
        
    //matching the conditions in the given question
    if(num < 0) return NaN;
    if(num == 0) return 1;
        
    let result = 1;                         //result starts from 1
    for (var fact = num; fact > 0; fact --){      //trick is not to use fact>=0 
        result *= fact;
    }
    return result;
}

module.exports = {
    firstName: "ANIRUDH", 
    lastName: "BEZZAM", 
    studentId: "10442380",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};