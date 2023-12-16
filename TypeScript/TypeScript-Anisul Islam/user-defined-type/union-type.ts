// NOTE: Union Type - more than one type for variable or function parameter

let userId: number | string;

userId = 101; // no error
userId = '101'; // no error
// userId = true; // error here

console.log(userId);

const displayUserInfo = (userId: number | string) => {
  console.log(userId);
};

displayUserInfo(404);
displayUserInfo('404');
// displayUserInfo(true) ;  // error here
