// NOTE: Union Type - more than one type for variable or function parameter
var userId;
userId = 101; // no error
userId = '101'; // no error
// userId = true; // error here
console.log(userId);
var displayUserInfo = function (userId) {
    console.log(userId);
};
displayUserInfo(404);
displayUserInfo('404');
// displayUserInfo(true) ;  // error here
