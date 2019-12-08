//packages
const express = require('express');
const helmet = require('helmet');

//local files
const recipes = require('./recipes/recipe-model');

const server = express();

const errMessage = "SERVER ERROR"

server.use(helmet());
server.use(express.json())

server.get('/api/recipes', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: errMessage, error: err});
        })
})

server.get('/api/recipes/:id', (req, res) => {
    const { id } = req.params;

    recipes.getRecipesById(id)
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: errMessage, error: err});
        })
})


server.get('/api/recipes/:id/ingredients', (req, res) => {
    const { id } = req.params;

    recipes.getShoppingList(id)
        .then(ingredients => {
            res.json(ingredients)
        })
        .catch(err => {
            res.status(500).json({ message: errMessage, error: err});
        })
})

server.get('/api/recipes/:id/instructions', (req, res) => {
    const { id } = req.params;

    recipes.getInstructions(id)
        .then(instructions => {
            console.log(instructions)
            res.json(instructions)
        })
        .catch(err => {
            res.status(500).json({ message: errMessage, error: err});
        })
})
module.exports = server;