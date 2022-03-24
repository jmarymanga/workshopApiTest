const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URI_LOCAL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connecté')
}).catch((err) => {
    console.log(err);
})