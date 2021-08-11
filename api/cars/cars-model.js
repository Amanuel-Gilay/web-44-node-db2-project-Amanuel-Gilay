const getAll = () => {
  
}

const getById = () => {
  return db('posts').where('id', id).first()
}

const create = ({ title, contents}) => {
  const [id] = await db('cars').insert({ title, contents }) 
  const newCar = await getById(id)
  return newCar 
}
