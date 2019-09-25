var express = require('express');
var app = express();
app.set('view engine','ejs');
var bodyParser = require('body-parser')
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))
var async = require("async");
var urlEncodedParser = bodyParser.urlencoded({extended: false})


var a;

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/g-catalog', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB has started ...'))
  .catch(e => console.log(e))

require('./public/gameModel')


const Game = mongoose.model('g-catalog')
const SysReq = mongoose.model('SysReq')
app.use('/public', express.static('public'))
                
 
    //  Game.aggregate([
    //   {$lookup: 
    //     {
    //     from: "SysReq",
    //     localField: "name",
    //     foreignField: "name",
    //     as: "SysReq_res"
    //   }
    // }

    //  ]).then(game => {
       
    //   console.log(JSON.stringify(game))
        
    //  })

 app.get('/', function(req,res){res.sendFile(__dirname + '/public/index.html');})

app.post('/', urlEncodedParser ,function(req,res){
  if(!req.body){ return res.sendStatus(400)}
  else{

    function getAirportViaJson(code) {
      return new Promise(resolve => {

        Game.aggregate([
          {$match: { name: code } },
          {$lookup: 
            {
            from: "SysReq",
            localField: "name",
            foreignField: "name",
            as: "SysReq_res"
          }
        }
    
         ]).then(game => { resolve(game) })
        
    // Game
    //  .find({name: code})
    //  .then(game => { console.log(game),resolve(game) }) 
    
    //  .catch(err => console.log(err));  
     
        


       });
    }






    async function getAirportByCode(code) {
      try {
        let airport = await getAirportViaJson(code);
        return airport;
      } catch (err) {
        console.log(err);
      }
  }
  
let search = req.body.search;

console.log(search)
  let a = getAirportByCode(search)
    .then() 
    .catch(err => console.log(err));


   a.then(function(result) {
    res.render('game', {GameName: result[0].name, 
                        listofGames: result, 
                        OS: result[0].SysReq_res[0].OS,
                        Capacity: result[0].SysReq_res[0].capacity,
                        CPU: result[0].SysReq_res[0].cpu,
                        GPU: result[0].SysReq_res[0].gpu,
                        RAM: result[0].SysReq_res[0].ram   
                      })
  })

    
  }
})
app.listen(3000)