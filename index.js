const express = require('express');
const routes = require('./routes');
const app = express();
const port = 8080;

app.use("/",routes)
app.use("/")

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
