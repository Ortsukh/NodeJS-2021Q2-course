const DB = require("../../common/inMemoryDb");

const getAll = async () => DB.getAllBoards();

const get = async id => {
 const board = DB.getBoard(id);

 if(!board){
   throw new Error(`the user with ${id} was not found`)
 }
 return board;
}

const create = async board => DB.createBoard(board);

const update = async (id, board) => DB.updateBoard(id, board)

const remove = id => DB.removeBoard(id);

module.exports = { getAll, get, create, update, remove};
