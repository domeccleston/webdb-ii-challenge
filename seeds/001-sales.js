
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {salesId: 1, Price: '24000', Make: 'Ford', Model: 'Fiesta', Sale_date: '31/09/19'},
        {salesId: 2, Price: '32000', Make: 'Audi', Model: 'A3', Sale_date: '24/09/19'},
        {salesId: 3, Price: '28000', Make: 'Honda', Model: 'Civic', Sale_date: '11/09/19'},
      ]);
    });
};
