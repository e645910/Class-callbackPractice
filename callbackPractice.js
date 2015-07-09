/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

  //Code Here for first

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, callback){ 
    callback(arr[0]);
};

first(names, function(firstName){
  console.log('The first name in names is ', firstName);
});


//NEXT PROBLEM ===============================================================

  //Code Here for last

var names = ['Tyler', 'Jacob', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(arr, callback){
  callback(arr[arr.length -1]);
};

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


//NEXT PROBLEM ===============================================================

  //Code Here for multiply
var multiply = function(num1, num2) {
  return num1 * num2;
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});


//NEXT PROBLEM ===============================================================


  //Code Here for contains
var names = ['Tyler', 'Jacob', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

//use var contains = function here if you only want to look below var names 

var contains = function(arr, value, callback) { // arr = contains
  var result = false;                          // sets result to 0 or false
    for (var i = 0; i < arr.length; i++) {    //loop through array
      if (arr[i] === value) {               //test to see what the result value is equal to
        result = true;                    //shows result for true below
      }
   }
   callback(result);
};

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

// use function contains for the function to work here as this type of function looks above and below

// function contains(arr, value, callback){ // arr = contains
//   var result = false;                          // sets result to 0 or false
//     for (var i = 0; i < arr.length; i++) {    //loop through array
//       if (arr[i] === value) {               //test to see if 
//         result = true;
//       }
//    }
//    callback(result);
};




//NEXT PROBLEM ===============================================================

  //Code Here for each
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, callback){
var uniqueNames = [];
    for(var i in names){
        if(uniqueNames.indexOf(names[i]) === -1){
            uniqueNames.push(names[i]);
        }
    }
callback(uniqueNames);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//NEXT PROBLEM ===============================================================

    //Code Here for each
var each = function(arr, callback){
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


//NEXT PROBLEM ===============================================================


 //code here for getUserById
var getUserById = function(arr, idNum, callback) {
for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === idNum) {
        callback(arr[i]);
        }
    }
};


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
