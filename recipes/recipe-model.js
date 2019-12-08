const db = require('../data/db-config');

function getRecipes() {
    return db('recipes')
}

function getRecipesById(id) {
    return db('recipes').where({id}).first();
}

function getShoppingList(recipe_id) {
    return db('recipes_ingredients AS ri')
        .join('ingredients as i','i.id', 'ri.ingredient_id')
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .select('r.dish_name', 'i.ingredient')
        .where('ri.recipe_id', '=', recipe_id)

}

function getInstructions(recipe_id) {
    return db('instructions as i')
        .where('i.recipe_id', '=', recipe_id)
}

module.exports ={
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
}