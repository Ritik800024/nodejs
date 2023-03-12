const express=require('express');
const bodyparser=require('body-parser');

const app=express();

const routeadmin=require('./routes/admin')
const routeshop=require('./routes/shop')

app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',routeadmin)
app.use('/shop',routeshop)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);