
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: "Water"},
        {ingredient: "Salt"},
        {ingredient: "Sour Mix"},
        {ingredient: "Pork"},
        {ingredient: "Vegtable Oil"},
        {ingredient: "Pepper"},
        {ingredient: "Sugar"},
        {ingredient: "Vinegar"},
        {ingredient: "Macaroni"},
        {ingredient: "Parmasan Cheese"},
        {ingredient: "Goat Cheese"}
      ]);

};
