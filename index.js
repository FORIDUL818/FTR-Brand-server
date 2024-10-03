const app=require("./app")
const Port=process.env.PORT ||6000;

app.listen(Port,()=>{
    console.log(`server is running ${Port}`)    
})