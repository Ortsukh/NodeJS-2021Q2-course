const DB = [];

const getAllUsers = async () => DB.slice(0);

const getUser = async (id) => DB.filter( el => el.id === id)[0];

const getIndexUser = async (id) => DB.findIndex( el => el.id === id);

const createUser = async (user) => {
    DB.push(user);
    return user
}

const updateUser = async (id, user) => {
    const userId = await getUser(id);
    userId.name = user.name;
    userId.login = user.login;
    userId.password = user.password;
    return userId;
}

const deleteUser = async id => {
   
    const userIndex = await getIndexUser(id);
    
    if (userIndex > -1) {
        DB.splice(userIndex, 1);
      }
      else{
        
            throw new Error(`the user with ${id} was not found`)
          
      }
      return DB.slice(0)
}

module.exports = {getAllUsers, getUser, createUser, updateUser, deleteUser};