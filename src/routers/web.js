const { Router } = require('express');
const siteController = require('../app/Controllers/SiteController');
const webRouter = Router();

webRouter.get('/', siteController.index);
webRouter.get('/products', siteController.product);
webRouter.get('/detail/:id', siteController.details);
webRouter.get('/cart', siteController.cart);

webRouter.use((req, res, next) => {
    res.render('pages/404page', { layout: false });
});

module.exports = webRouter;
