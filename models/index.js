// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
