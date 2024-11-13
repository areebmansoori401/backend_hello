import express from 'express'
const app = express()
const port = 3000

app.use(express.json());
const users = [
    {
        id: 1,
        name: "Talha"
    },
    {
        id: 2,
        name: 'Areeb'
    }
];


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send(users)
})

app.post("/user", (req, res) => {
    const { name } = req.body;
    users.push({
        id: Date.now(),
        name,
    });
    res.send({
        message: "User Added Successfully",
        data: users,
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})