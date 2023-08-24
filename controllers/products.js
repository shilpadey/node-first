const products = [];

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postAddProducts = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/shop/products');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/shop/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
};

exports.getContacts = (req, res, next) => {
    res.render('contacts', {
      pageTitle: 'Contact Us',
      path: '/contactus',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postContacts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};

exports.getSuccess = (req, res, next) => {
    res.render('success', {
        pageTitle : 'Success',
        path: '/success',
    })
};

