const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const testPass = '123456789';
    const hash = await bcrypt.hash(testPass, 10);

    const testUser = {
      email: 'elijah@elijah',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [testUser]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
