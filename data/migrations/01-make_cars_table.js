exports.up = function (knex) {
  return knex.schema.createTable('cars',tbl => {
    tbl.increments()
    tbl.text('car_vin',556).unique().notNullable()
    tbl.text('car_mileage').notNullable()
    tbl.text('car_make').notNullable()
    tbl.text('car_model').notNullable()
    tbl.text('car_cleantitle').defaultTo(true)
    tbl.text('car_salvage').defaultTo(false)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};



