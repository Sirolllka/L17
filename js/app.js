console.log('You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"');

alert('Please enter your data');
let userName = prompt("What's your name?", 'Name');
alert(`Your name is: ${userName}`);
let userSurname = prompt("What's your surname?", 'Surname');
alert(`Your full name is: ${userName} ${userSurname}`);
let userAge = prompt("How old are you?", 'Age' );
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${userAge} `);
let access = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${userAge}, admin status: ${access}`);