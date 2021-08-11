exports.up = function (knex) {
  return knex.schema.createTable('cars',tbl => {
    tbl.increments()
    tbl.string('vin',13).notNullable().unique()
    tbl.string('make').notNullable()
    tbl.string('model', 128).notNullable()
    tbl.integer('mileage',128).unsigned().notNullable()
    tbl.string('title', 128)
    tbl.string('transmission',128)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};



