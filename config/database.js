const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Database connected"))
.catch(err => console.error(err))
