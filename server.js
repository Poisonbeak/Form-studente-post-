const express = require("express");
const app = express();
const port = 3300;

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})