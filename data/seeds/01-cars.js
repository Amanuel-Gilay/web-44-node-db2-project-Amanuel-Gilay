// STRETCH
const cars = [
    {
        vin:"1111111111111",
        make: "toyota",
        model: "camry",
        mileage: 180000,
        title: 'clean',
        transmission: "manual",

    },
    {
        vin:"2222222222222",
        make: "toyota",
        model: "prius",
        mileage: 160000,
        title: 'salvage',
        

    },
    {
        vin:"3333333333333",
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