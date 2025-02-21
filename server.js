const express = require("express");
const app = express();
const port = 3300;

app.use(express.static(__dirname))              // fornisce i file delle pagine direttamente dalla cartella
app.use(express.json());                        // converte le fetch da raw data in oggetto
app.use(express.urlencoded({extended:true}));   // conversione per le post

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})