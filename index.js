const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

// Load Environment Variables
dotenv.config({ path: './server/config/config.env' });

const app = express();

// Dev loggin middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(()=> process.exit(1));
});
