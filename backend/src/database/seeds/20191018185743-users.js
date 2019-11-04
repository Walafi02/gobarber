const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Walafi Provider',
        email: 'walafif@yahoo.com',
        password_hash: bcrypt.hashSync('123456', 8),
        provider: true,
        avatar_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Walafi Ferreira',
        email: 'walafif100@gmail.com',
        password_hash: bcrypt.hashSync('123456', 8),
        provider: false,
        avatar_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
