const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("ritik");
    next();
});
app.use((req,res,next)=>{
    console.log("kumar");
});
app.listen(3000);