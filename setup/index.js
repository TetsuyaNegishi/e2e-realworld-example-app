const mysql = require("mysql");

const config = require("../config.json");

const connection = mysql.createConnection(config);

// const connection = mysql.createConnection();

const password = '$argon2i$v=19$m=4096,t=3,p=1$OieiVNGFJu7Ptfm4u4Pn3Q$EaREhIPZmDNYE4uGKzJ6q477bTRTMiCjrSwxL7tuJ8s'; // test

const user = `
insert into user(username, email, password) values('user1', 'test1@test.test', '${password}');
`;

connection.connect();

connection.query(user);

connection.end();
