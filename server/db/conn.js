const mongoose = require('mongoose');

const DB = 'mongodb+srv://newUser:Anurag123@cluster0.snkxv.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection start!")
).catch((err) => console.log(err.message)
);
