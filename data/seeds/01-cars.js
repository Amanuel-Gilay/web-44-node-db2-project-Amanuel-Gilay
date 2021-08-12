// STRETCH
const cars = [
    {
        vin:"4Y1SL65848Z411439",
        make: "toyota",
        model: "camry",
        mileage: 180000,
        title: 'clean',
        transmission: "manual",

    },
    {
        vin:"4Y1SL65848Z411438",
        make: "toyota",
        model: "prius",
        mileage: 160000,
        title: 'salvage',
        

    },
    {
        vin:"4Y1SL65848Z411437",
        make: "chevey",
        model: "camero",
        mileage: 190000,
        

    },
]

// exports.seed = function (knex) {
//     return knex('cars')
//     .truncate().then(()=>{
//         return knex('cars').insert(cars)
//     })  

// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}