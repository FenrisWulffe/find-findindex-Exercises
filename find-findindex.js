/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  // console.log('Starting Array: ', usersArray);
  let query = username;
  // console.log('Search for User Name: ', query);
  return usersArray.find(function(val) {
    // console.log('Object: ', val);
    // console.log('Object Value: ', Object.values(val));
    if (Object.values(val) == query) {
      // console.log(val);
      return val;
    }
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  // console.log(usersArray);
  let delUser  = username;
  // console.log(delUser);
  return usersArray.find(function(val) {
    // console.log(val);
    // console.log('Object Value: ', Object.values(val));
    if (Object.values(val) == delUser) {
      // console.log('Did it');
      let remIndex = usersArray.indexOf(val);
      // console.log(remIndex);
      usersArray.splice(remIndex, 1);
      // console.log(usersArray);
      // console.log(val);
      return val;
    }
  });
}