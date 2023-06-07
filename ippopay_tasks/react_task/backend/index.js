const app = require("./main.js");

const port = process.env.PORT || 4002;

app.listen(port, function(req,res) {
    console.log("Listening on port :::", port)
})