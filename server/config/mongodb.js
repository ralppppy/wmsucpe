const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://wmsucpe:fofUKJPg0GZRaQoL@cluster0.u00gv.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

module.exports = mongoose;
