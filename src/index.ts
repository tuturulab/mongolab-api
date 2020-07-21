import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

mongoose.Promise = global.Promise;

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.PORT || 5000
const dburl = "mongodb+srv://admin:oQPCCoaopX7vkdEo@cluster0.t5rl5.mongodb.net/MongoLABDB?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/", ( req, res ) => {
    // render the index template
    res.render("index");
});
app.use('/', routes);



mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    // start the express server
    app.listen( port, () => {
        // tslint:disable-next-line:no-console
        console.log( `server started at http://localhost:${ port }` );
    } );
});