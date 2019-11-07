
exports.up = function(knex) {
    return knex.schema.createTable('sales', table => {
      table.increments('salesId');
  
      table.float('Price').notNullable().unique()
      table.string('Make').notNullable()
      table.string('Model').notNullable()
      table.date('Sale_date').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales');
  };