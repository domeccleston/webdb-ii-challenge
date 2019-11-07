
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'ABC123', Make: 'Ford', Model: 'Fiesta', mileage: '80000', salesId: 1},
        {id: 2, VIN: 'BCD542', Make: 'Audi', Model: 'A3', mileage: '12000', salesId: 2},
        {id: 3, VIN: 'CAG546', Make: 'Honda', Model: 'Civic', mileage: '50000',  salesId: 3},
      ]);
    });
};
