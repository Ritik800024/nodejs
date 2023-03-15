const path=require('path')

const express=require('express');

const rootdir=require('./util/path')
const bodyparser=require('body-parser');

const app=express();

const routeadmin=require('./routes/admin')
const routeshop=require('./routes/shop')
const routecontact=require('./routes/contact')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(routeadmin)
app.use(routeshop)
app.use(routecontact)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'))
})

app.listen(3000);