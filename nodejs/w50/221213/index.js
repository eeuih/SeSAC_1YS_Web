

const dotenv = require('dotenv');
dotenv.config();
//path:path.join(__dirname, './common.env')
//dotenv.config({path: './common.env'});

console.log(process.env.PORT);

//postman