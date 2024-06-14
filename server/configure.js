var mongoose = require('mongoose') ;
const dotenv = require('dotenv')
var colors = require('colors') ;
dotenv.config()

const mongodb_connection_string = process.env.mongouri  
const Connect = async() => 
{
    try 
    {
        await mongoose.connect(`${mongodb_connection_string}`,
        {
            useNewUrlParser:true ,
            useUnifiedTopology:true 
        }
    );
        console.log(`Successfully connected to database`.bgGreen ) ;
    } 

    catch(error)
    {
        console.log(error) ;
        console.log(`Could not connect to database`.bgRed) ;  
    }
}

module.exports = Connect ;
