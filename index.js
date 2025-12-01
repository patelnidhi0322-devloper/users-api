const express = require("express");
const app = express();

app.use(express.json());   // allow JSON body

let users = require("./users.json");

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// ADD new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.json({ message: "User added!", newUser });
});

// DELETE user by id
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
