import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const INFO_INPUT = {};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputTextArea = document.querySelector('[name="message"]');

form.addEventListener('submit', sendForm);
form.addEventListener('input', throttle(onCurrentInput, 500));

resetForm();

// const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

function sendForm(e) {
   e.preventDefault();
   if (inputEmail.value === '' || inputTextArea.value === '') {
    return console.log('Please fill in all the fields!');
  } else {
   e.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
      console.log(INFO_INPUT);
      INFO_INPUT.email = '';
      INFO_INPUT.message = '';
   // inputEmail.value = '';
   // inputTextArea.value = '';
   }
};

function onCurrentInput(e) {
   INFO_INPUT[e.target.name] = e.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(INFO_INPUT));
};

function resetForm() {
    const savedINFO_INPUT = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedINFO_INPUT) {
       inputEmail.value = savedINFO_INPUT['email']
          ? savedINFO_INPUT['email'] : '';
       inputTextArea.value = savedINFO_INPUT['message']
          ? savedINFO_INPUT['message'] : '';

        INFO_INPUT.email = inputEmail.value;
        INFO_INPUT.message = inputTextArea.value;
    }
}













// const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// console.log(STORAGE_KEY);
// const formLocalStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
// console.log(formLocalStorageData.email);


// if (formLocalStorageData.email) {
//    inputEmail.value = formLocalStorageData.email;
// };


//=====================================================

// // const _ = require('lodash');

// import throttle from 'lodash.throttle';

// const feedbackForm = document.querySelector('.feedback-form');

// // submiting
// //

// feedbackForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, message },
//   } = event.target;

//   if (email.value === '' || message.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(` ------> submited email: "${email.value}", message: "${message.value}"`);

//   localStorage.removeItem(localStorageLable);

//   event.target.reset();
// }

// // logging

// const localStorageLable = 'feedback-form-state';
// const localStorageFormData = localStorage.getItem(localStorageLable);

// let formData = JSON.parse(localStorageFormData);
// if (formData === null) {
//   formData = {
//     email: '',
//     message: '',
//   };
// }

// printFormData(formData);

// function printFormData(storage) {
//   document.querySelector('input[name=email]').value = storage.email;
//   document.querySelector('textarea[name=message]').textContent = storage.message;
// }

// feedbackForm.addEventListener('input', throttle(logInputedString, 500));

// function logInputedString(e) {
//   const name = e.target.name;
//   const value = e.target.value;
//   switch (name) {
//     case 'email':
//       loggingEmailMessage(name, value);
//       break;

//     case 'message':
//       loggingEmailMessage(name, value);
//       break;

//     default:
//       break;
//   }
// }

// function loggingEmailMessage(name, value) {
//   formData[name] = value;

//   localStorage.setItem(localStorageLable, JSON.stringify(formData));
// }