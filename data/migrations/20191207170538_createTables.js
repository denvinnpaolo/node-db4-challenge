
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('dish_name').notNullable();
    })
    .createTable('instructions', tbl => {
        tbl.increments();

        tbl.string('instruction', 1000).notNullable();
        
        tbl.integer('step').notNullable();

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient', 50)
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');

        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id');

        tbl.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
    };
