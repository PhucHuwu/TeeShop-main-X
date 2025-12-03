const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;

const ProductModel = new Schema({
    name: String,
    description: String,
    image: { type: String },
    quantity: Number,
    price: Number,
});
const User = mongoose.model('products', ProductModel);
module.exports = User;
