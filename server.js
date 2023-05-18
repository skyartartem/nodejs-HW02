const mogoose = require("mongoose")

const app = require('./app')
// culTsecaDRxLC0vU
const DB_HOST =
  "mongodb+srv://skyart:culTsecaDRxLC0vU@cluster0.jkkw02m.mongodb.net/skyart?retryWrites=true&w=majority";
mogoose.connect(DB_HOST).then(() => {
  app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
}).catch(error => {
  console.log(error.message);
  process.exit(1)
});

