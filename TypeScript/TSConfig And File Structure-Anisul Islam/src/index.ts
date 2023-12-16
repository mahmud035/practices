console.log('Hello I am index.ts');

const userForm = document.querySelector('.user-form') as HTMLFormElement;
// console.log(userForm);

const userName = document.querySelector('#username') as HTMLInputElement;
// console.log(userName);

const userEmail = document.querySelector('#useremail') as HTMLInputElement;
// console.log(userEmail);

const userCountry = document.querySelector('#country') as HTMLSelectElement;
// console.log(userCountry)

const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;
// console.log(userFeedback);

userForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };

  console.log(data);
});
