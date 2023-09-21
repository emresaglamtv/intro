const users = ["Mehmet", "Ahmet", "Murat"];

users.push("Ayşe");
// console.log(users);

// users.map((item) => {
//     console.log(item);
// });

// const result = users.find((item) => item === "Mehme");
// console.log(result)


const filtered = users.filter((item) => item === "Mehmet");
console.log(filtered)