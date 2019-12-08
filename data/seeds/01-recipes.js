
exports.seed = function(knex) {
      return knex('recipes').insert([
        {dish_name: 'Sinigang'},
        {dish_name: 'Macaroni and Cheese'},
        {dish_name: 'Cripy Pata'},
        {dish_name: 'Beef Steak'}
      ]);
};
