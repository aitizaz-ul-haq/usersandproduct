// exporting routes for product
module.exports = (app) => {
  const {
    addProduct,
    getProduct,
    getproductByID,
    updateProductInfo,
    deleteProduct,
  } = require("../controllers/product.controller");

  app.post("/products", addProduct);
  app.get("/products", getProduct);
  app.get("/products/:id", getproductByID);
  app.put("/productsupdate/:id", updateProductInfo);
  app.delete("/productdelete/:id", deleteProduct);
};
