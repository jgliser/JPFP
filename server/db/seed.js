const { Campus, Student } = require('./models');

const seedDatabase = async () => {
  await Campus.sync({ force: true });
  await Student.sync({ force: true });

  // Create campuses
  await Campus.bulkCreate([
    {
      name: 'Campus A',
      imageUrl: 'campus-a.jpg',
      address: '123 Street, City',
      description: 'Campus A description',
    },
    {
      name: 'Campus B',
      imageUrl: 'campus-b.jpg',
      address: '456 Street, City',
      description: 'Campus B description',
    },
  ]);

  // Create students
  await Student.bulkCreate([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      imageUrl: 'john-doe.jpg',
      gpa: 3.5,
      CampusId: 1,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      imageUrl: 'jane-smith.jpg',
      gpa: 3.8,
      CampusId: 2,
    },
  ]);

  console.log('Database seeded successfully!');
};

seedDatabase();
