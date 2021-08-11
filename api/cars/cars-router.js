// DO YOUR MAGIC
exports.seed = function (knex) { // dependency injection
    return knex('cars').truncate() // reset primary keys
      .then(function () {
        return knex('cars').insert([
          { cars_name: 'Toyota', avg_mileage: 10000, is_reliable: true }, // DELETE THE IDS!!!!!!!!!
          { cars_name: 'Honda', avg_mileage: 15000, is_reliable: false },
          { cars_name: 'Mercedes', avg_mileage: 5000, is_reliable: false, car_color: 'Blue' }, // same columns in all inserts
        ]);
      });
  };
