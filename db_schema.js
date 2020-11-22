const mongoose = require('mongoose')


const schema = mongoose.schema;
const FormSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const user_data = mongoose.model('user_data', FormSchema);

module.exports = user_data;