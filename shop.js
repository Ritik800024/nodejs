const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list',{
      prods:products,
      pageTitle:'All product',
      path:'/products'
    })
  })
  .catch(err=>{
    console.log(err)
  })
}

exports.getproduct=(req,res,next)=>{
  const prodid=req.params.productid
  Product.findAll({where:{id:prodid}})
  .then(product=>{
    res.render('shop/product-detail',{
      product:product[0],
      pageTitle:product[0].title,
      path:'/products'
    })
  })
  .catch(err=>console.log(err))
}

exports.deleteproduct=(req,res,next)=>{
  const prodid=req.params.productid
  Product.destroy({where:{id:prodid}})
  .then(
    res.redirect('/admin/products')
  )
  .catch(err=>console.log(err))
}

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/index',{
      prods:products,
      pageTitle:'shop',
      path:'/'
    })
  })
  .catch(err=>{
    console.log(err)
  })
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postcart=(req,res,next)=>{
  const prodid=req.body.productID
Product.findbyid(prodid,(product)=>{
  Cart.addproduct(prodid,Product.price)
})
  res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
