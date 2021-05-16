const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'new title',
    columns = [
      {
        id: 12345,
        title: 'new title',
        order: 0,
      },
    ],
  } = {}) {
    // columns.forEach((el) => {
    //   el.id = uuid.v4();
    // });
    this.id = id;
    this.title = title;
    this.columns = columns;
  }


}

module.exports = Board;
