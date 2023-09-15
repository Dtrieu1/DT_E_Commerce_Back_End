const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const category = await Category.findAll({include: {model: Product}}).catch((err) => {
    res.json(err);
   
  });
  res.json(category);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id,{include: {model: Product}}).catch((err) => {
    res.json(err);
  });
  res.json(category);
});


router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create({}).catch((err) => {
    res.json(err);
  });
  res.json(category);
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  const category = await Category.findByPk(req.params.id,{include: {model: Product}}).catch((err) => {
    res.json(err);
  });
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.findByPk(req.params.id,{include: {model: Product}}).catch((err) => {
    res.json(err);
  });
  res.json(category);
});

module.exports = router;
