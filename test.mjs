import sqlite3 from "sqlite3";
import fetch from "node-fetch";

let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
  console.log("Connection Successfull");
});

// sql = `SELECT * FROM user`;
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//   rows.forEach((each) => {
//     console.log(each);
//   });
// });

// sql = `CREATE TABLE user (id INTEGER, first_name VARCHAR(250), last_name VARCHAR(250),
//   company_name VARCHAR(250), city VARCHAR(250), state VARCHAR(250), zip INTEGER,
//   email VARCHAR(250), web VARCHAR(250), age INTEGER);`;
// db.run(sql);

// const url =
//   "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

// const getUserData = async () => {
//   try {
//     const response = await fetch(url);
//     const jsonData = await response.json();
//     jsonData.forEach((each) => {
//       let userData = {
//         id: each.id,
//         first_name: each.first_name,
//         last_name: each.last_name,
//         company_name: each.company_name,
//         city: each.city,
//         state: each.state,
//         zip: each.zip,
//         email: each.email,
//         web: each.web,
//         age: each.age,
//       };
//       sql = `INSERT INTO user
//                 (id, first_name, last_name, company_name, city, state, zip, email, web, age)
//                 VALUES(?,?,?,?,?,?,?,?,?,?)`;
//       db.run(
//         sql,
//         [
//           userData.id,
//           userData.first_name,
//           userData.last_name,
//           userData.company_name,
//           userData.city,
//           userData.state,
//           userData.zip,
//           userData.email,
//           userData.web,
//           userData.age,
//         ],
//         (err) => {
//           if (err) return console.error(err.message);
//           else console.log("Inserted user data successfull");
//         }
//       );
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUserData();
