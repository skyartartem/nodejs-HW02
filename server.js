const mogoose = require("mongoose");

const app = require("./app");
// culTsecaDRxLC0vU
const { DB_HOST, PORT = 3000 } = process.env;

// console.log(process.env);

mogoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Database connection successful`);
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
