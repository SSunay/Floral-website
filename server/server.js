const express = require('express')
const app = express()
const bodyParser =require('body-parser')
const cors = require('cors')
const { mongoose } = require('mongoose')
const {Schema}=mongoose
const dotenv = require('dotenv')
dotenv.config()

const plantSchema = mongoose.Schema({
    name:{type:String,required:true},
    descripton:{type:String,required:true},
    img:{type:String,required:true},
    price:{type:Number,required:true},
})

const Plants = mongoose.model('plants',plantSchema)

app.use(cors())
app.use(bodyParser.json())


///get all data
app.get('/plants', (req, res) => {
    Plants.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// get by id

app.get('/plants/:_id',(req,res)=>{
    const {_id}=req.params
    Plants.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'not found...'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})


//// delete

app.delete('/plants/:_id',(req,res)=>{
    const {_id}=req.params
    Plants.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
        res.send('success...')
    }else{
        res.status(500).json({message:err})
    } 
    })
   
})


/// post new data

app.post('/plants',(req,res)=>{
    const plant = new Plants({
        name:req.body.name,
        descripton:req.body.descripton,
        img:req.body.img,
        price:req.body.price,
    })
    plant.save()
    res.send('success...')
})



PORT = process.env

DB = process.env.DB_URL.replace('<password>',process.env.PASSWORD)


mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('DB connected')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

    }
})