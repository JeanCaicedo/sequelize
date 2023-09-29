const router = require('express').Router()
const { faker } = require('@faker-js/faker')

const ProductS = require('../module/product.module')

router.get('/products', async (req, res) => {
    const porducts = await ProductS.findAll()
    res.status(200).json({
        message: 'Product list',
        status: 200,
        ok: true,
        porducts,
    });
})
router.get('/products/:product_id', async (req, res) => {
    const id = req.params.product_id
    const porduct = await ProductS.findOne({
        where: {
            product_id: id,
        }
    })
    res.status(200).json({
        message: 'Product list',
        status: 200,
        ok: true,
        porduct,
})
})
router.post('/products', async (req, res) => {
    await ProductS.sync()
    const createProduct = await ProductS.create({
        product_name: faker.commerce.productName(),
        price: faker.commerce.price(),
        is_Stock: faker.datatype.boolean(),
    })
    res.status(201).json({
        message: 'Product created successfully',
        status: 201,
        ok: true,
    });
});

router.put('/products', (req, res) => {
    res.send('I am a router')
})
router.delete('/products', (req, res) => {
    res.send('I am a router')
})

module.exports = router