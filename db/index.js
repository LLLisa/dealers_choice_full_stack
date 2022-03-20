const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack',
  { logging: false }
);

//models-------------------------------------
const Manufacturer = db.define('manufacturer', {
  name: Sequelize.STRING,
});

const Bike = db.define('bike', {
  name: Sequelize.STRING,
  style: Sequelize.STRING,
  material: Sequelize.STRING,
});

Bike.belongsTo(Manufacturer);
Manufacturer.hasMany(Bike);

//db seed--------------------------------------
const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const [allCity, cannondale, spaceHorse, natureBoy, sixThirteen] =
      await Promise.all([
        Manufacturer.create({ name: 'All-City' }),
        Manufacturer.create({ name: 'Cannondale' }),
        Bike.create({
          name: 'Space Horse',
          style: 'Touring',
          material: 'Steel',
        }),
        Bike.create({
          name: 'Nature Boy',
          style: 'CycloCross',
          material: 'Steel',
        }),
        Bike.create({
          name: '613',
          style: 'Road Bike',
          material: 'Carbon/Aluminum',
        }),
      ]);
    spaceHorse.manufacturerId = allCity.id;
    natureBoy.manufacturerId = allCity.id;
    sixThirteen.manufacturerId = cannondale.id;

    await Promise.all([
      spaceHorse.save(),
      natureBoy.save(),
      sixThirteen.save(),
    ]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { syncAndSeed, Bike, Manufacturer };
