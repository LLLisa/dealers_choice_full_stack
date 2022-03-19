const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack',
  { logging: false }
);

const Manufacturer = db.define('manufacturer', {
  name: Sequelize.STRING,
});

const Bike = db.define('bike', {
  name: Sequelize.STRING,
});

Bike.belongsTo(Manufacturer);
Manufacturer.hasMany(Bike);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const allCity = await Manufacturer.create({ name: 'All-City' });
    const cannondale = await Manufacturer.create({ name: 'Cannondale' });
    const spaceHorse = await Bike.create({ name: 'Space Horse' });
    const natureBoy = await Bike.create({ name: 'Nature Boy' });
    const sixThirteen = await Bike.create({ name: '613' });
    spaceHorse.manufacturerId = allCity.id;
    natureBoy.manufacturerId = allCity.id;
    sixThirteen.manufacturerId = cannondale.id;
    await spaceHorse.save();
    await natureBoy.save();
    await sixThirteen.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = syncAndSeed;
