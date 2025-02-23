const express = require("express");
const app = express();
const port = 3000;

const itemsRouter = require("./routes/items");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(express.json());

app.use("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
