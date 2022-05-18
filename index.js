const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const blogRouter = require('./routes/blogroutes');
const userRouter = require('./routes/userroute')
const sequelize = require('./config/dbcofig');
const bodyparser = require('body-parser');

sequelize.sync().then((result) => {
   console.log('Connected Successfully.......')
}).catch((err) => {
    console.log(`Error :${err}`)
});


app.use(bodyparser.json());
app.get('/', (req,res) => {
    res.json({msg : 'HEllo Bloggers'})
});
app.use('/blog',blogRouter);
app.use('/user',userRouter);

app.listen(port, ()=>{ console.log(`http://localhost:${port}`)})