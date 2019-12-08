
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('instructions').insert([
        {instruction: "Boil Water", step: 1, recipe_id: 1},
        {instruction: "Set Pan to 300 F", step: 1, recipe_id: 3},
        {instruction: "Add all Cheese", step: 1, recipe_id: 2}
      ]);
};
