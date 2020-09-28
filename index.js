// console.log("hello");

// VAR LET CONST

// function numbers() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log("outside: ", i);
// }
// numbers();

//LET

// function numbers() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   if (true) {
//     let m = 10;
//   }
//   console.log("outside: ", i);
// }
// numbers();

// let name = "raj";

// let name = "yash";

// console.log(name);

//CONST

// const password = "abc123";
// password = "abc";

// console.log(password);

// const student = {
//   name: "yash",
//   std: 10,
//   subject: function abc() {
//     return "hello";
//   }
// };

// student.name = "shlok";

// console.log(student);

//ARROW FUNCTION

// function welcome() {
//   return "hello user";
// }

// const wel = welcome();

// console.log(wel);

// const welcome = () => {
//   return "Hello user";
// };

// console.log(welcome());

// const welcome = user => {
//   return `Welcome ${user} , happy to see you again ! `;
// };

// console.log(welcome("yash"));

// //ARROW FUNCTION

// const abc = (user, age) => `Welcome ${user} your age is ${age}`;

// console.log(abc("yash", 20));

// const a = (a, b) => {
//   console.log("hello in 2 par...!");
//   return a + b;
// };

// const ans = a(12, 10);

// console.log(ans);

//OBJECT DESTRUCTRING

// const address = {
//   street: "abc",
//   city: "xyz",
//   country: "aaa"
// };

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street: st, city } = address;

// console.log(st, city);

//SPREAD OP:

// const num = [1, 2, 3, 4, 5];

// const alph = ["a", "b", "c", "d"];

// const joinn = num.concat(alph);

// const sp = [...num, "abc", ...alph];

// console.log(sp);

// const address = {
//   street: "abc",
//   city: "xyz",
//   country: "aaa"
// };

// const st = { ...address };

// console.log(st);

//MAP

// const names = ["nikunj", "yash", "shlok", "roshil"];

// const Mname = names.map(items => `<li>${items}</li>`);

// console.log(Mname);

// const programming = [
//   { name: "PYTHON", trending: "yes" },
//   { name: "react", trending: "yes" },
//   { name: "c++", trending: "no" },
//   { name: "java", trending: "yes" }
// ];

// const pg = programming.map(
//   (items, index) =>
//     `<li>${index}</li><li>${items.name}</li> <li>${items.trending}</li>`
// );

// console.log(pg);

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.map(item => 1 + item);
// console.log(sum);

//FILTER

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const fitems = numbers.filter(item => item % 2 == 0);

// console.log(fitems);

// const employee = [
//   { name: "raj", des: "dev" },
//   { name: "shlok", des: "designer" },
//   { name: "bhargav", des: "UI/UX" },
//   { name: "yash", des: "dev" },
//   { name: "Nikunj", des: "dev" }
// ];

// const developer = employee.filter(item => item.des == "dev");

// console.log(developer);

//REDUCE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum =0;

// for(let i=0;i<numbers.length;i++){
//     sum=sum+i;
// }

// const rnumbers = numbers.reduce((init, items) => {
//   return init + items;
// });

// console.log(rnumbers);

//---------------------------------------------------------------------------------------------

//CALLBACK

// function one() {
//   console.log("in one");
// }
// function two(callback) {
//   setTimeout(() => {
//     console.log("in two");
//     callback(); //EXECUTION
//   }, 0);
// }
// function three() {
//   console.log("in three");
// }

// one();
// two(three);

//PROMISE

// const promise = new Promise((resolve, reject) => {
//   resolve("yes we did it !!");
// });
// console.log(promise);

// function getUsers(onSucess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (onSucess) {
//         resolve([
//           { id: 1, name: "abc" },
//           { id: 1, name: "abc" },
//           { id: 1, name: "abc" }
//         ]);
//       } else {
//         reject("failed to fetch data");
//       }
//     }, 1000);
//   });
// }

// getUsers(false)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fetch("https://api.got.show/api/show/characters")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

async function getUsers() {
  try {
    const response = await fetch("https://api.got.show/api/show/characters");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("error in fetching data : ", err);
  }
}

getUsers();

console.log("hello");
