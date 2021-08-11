const express = require('express');
const routes = express.Router();

/**
 * 
 * GET - Retornar algo do servidor 
 * POST - Salvar algo no sevidor ou no bando de dados
 * PUT, PATCH - Atualizar dados em um servidor
 * DELETE - Deletar itens do servidor 
 * 
 */

let restaurants = [
    {
        id: Math.random(),
        name: "Vila Tarego",
        address: "SMPW 05 Conjunto 12 Lote 5 Parte C Parkway - Águas Claras, Brasília - DF, 71735-512",
        lat: -15.823007,
        long: -48.0114673,
    },
    {
        id: Math.random(),
        name: "Ricco",
        address: "Asa Sul Comércio Local Sul 306 - Asa Sul, Brasília - DF, 70353-530",
        lat: -15.8113641,
        long: -47.9016945,
    },
]

// TODO - retornar próximos

routes.get('/restaurants', (req, res) => {
    return res.json(restaurants)
})

routes.post('/restaurants', (req, res) => {
    const body = req.body;
    const restaurant = { ...body, id: Math.random() };
    restaurants = [...restaurants, restaurant];
    return res.json(restaurants);
});

routes.delete('/restaurants/:id', (req, res) => {
    const { id } = req.params;

    restaurants = restaurants.filter(restaurant => restaurant.id !== Number(id));
    res.json(restaurants);
})

routes.put('/restaurants/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;

    restaurants = restaurants.map(restaurant => {
        if (restaurant.id === Number(id)) {
            restaurant = { ...restaurant, ...body };
        }
        return restaurant;
    });

    res.json(restaurants);
})

routes.get('/', (req, res) => {
    return res.send('Server is working!!');
})

module.exports = routes;
