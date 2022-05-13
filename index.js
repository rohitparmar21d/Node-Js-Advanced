const express = require('express');
const app = express();
const port = 5000;
const blogRouter = require('./routes/blogroutes');
const sequelize = require('./config/dbcofig');
const bodyparser = require('body-parser');

sequelize.sync().then((result) => {
   console.log('Connected Successfully.......')
}).catch((err) => {
    console.log(`Error :${err}`)
});


app.use(bodyparser.json());
app.get('/', (req,res) => {
    res.end('HEllo Bloggers')
});
app.use('/blog',blogRouter);




app.listen(port, ()=>{ console.log(`http://localhost:${port}`)})