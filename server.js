import express from "express"
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});

app.get('/home', async (req, res) => {
    res.json({
        msg:"I am root!"
    });
});

app.get("/sum/:a/:b", async(req, res) => {
    const {a, b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
})