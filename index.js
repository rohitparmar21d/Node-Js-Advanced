const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const blogRouter = require('./routes/blogroutes');
const userRouter = require('./routes/userroute')
const sequelize = require('./config/dbcofig');
const cookieParser = require('cookie-parser');

sequelize.sync().then(() => {
   console.log('Connected Successfully.......')
}).catch((err) => {
    console.log(`Error :${err}`)
});


app.use(express.static("public"))
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended :false}));

app.get('/',(req,res) => {
    res.render('index');
});
app.get('/', (req,res) => {
    res.json({msg : 'HEllo Bloggers'})
});
app.use('/blog',blogRouter);
app.use('/user',userRouter);

app.listen(port, ()=>{ console.log(`http://localhost:${port}`)})