
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
      table.increments('id');
  
      table.string('VIN').notNullable().unique()
      table.string('Make').notNullable()
      table.string('model').notNullable()
      table.float('mileage').notNullable()
      table.integer('salesId').unique()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  