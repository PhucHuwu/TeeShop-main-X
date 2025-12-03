const Product = require('../Model/Product');
function formatCurrency(number) {
    return number.toLocaleString('vi-VN') + ' vnđ';
}

class SiteController {
    async index(req, res) {
        try {
            const products = await Product.find({});
            res.render('pages/home', { products });
        } catch (error) {
            console.log(error);
        }
    }
    async product(req, res) {
        try {
            const products = await Product.find({});
            res.render('pages/content', { products, formatCurrency });
        } catch (error) {
            console.log(error);
        }
    }
    async details(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findById(id);
            const products = await Product.find({ _id: { $ne: id } }).limit(4);
            res.render('pages/detail', { product, products, formatCurrency });
        } catch (error) {
            console.log(error);
            res.redirect('/');
        }
    }
    async cart(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findById(id);
            const products = await Product.find({ _id: { $ne: id } }).limit(4);
            res.render('pages/cart', { product, products });
        } catch (error) {
            console.log(error);
            res.redirect('/');
        }
    }
}
const siteController = new SiteController();

module.exports = siteController;
