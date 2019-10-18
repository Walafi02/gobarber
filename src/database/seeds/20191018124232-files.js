module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('files', [
      {
        id: 1,
        name: 'perfil.png',
        path: '0a6ee907c2096cb7f00757bb24ea894c.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'perfil2.png',
        path: 'ff482b55ef6cd974d3eaeac464bce01c.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
