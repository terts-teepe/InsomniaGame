const Sequelize = require('sequelize');
const connectionString = ('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/insomnia');
const db = new Sequelize(connectionString);

// defining elements of table user
const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Score = db.define('score', {
  score: Sequelize.INTEGER
});

const Game = db.define('game', {});


User.hasMany(Score)
Score.belongsTo(User)
Game.hasMany(Score)
Score.belongsTo(Game)

// module.exports.db = db

db.sync({
    force: true,
  })

  .then(yolo => {

    //create test data -- always do this after synchronizing the database, otherwise NodeJS with it's asynchronisity will fuck you up.
    User.create({
      username: 'terts-teepe',
      password: 'weetikniet',
      email: 'terts@live.nl'
    })
    .then(user => {


      Game.create()
      .then( game => {
        // user.createScore({
        //   score: 0,
        //   gameId: game.id
        // })
      })
    })

    User.create({
        username: 'chestongo',
        password: 'fuckyou',
        email: 'cheston6_go@hotmail.com'
      })
    .then(user => {
      // user.createScore({
      //   score: 0,
      //   gameId: 1
      // })
    })
    .catch(e => console.log(e))

  })

  .catch(e => console.log(e))

module.exports = {
  db: db,
  User: User,
  Score: Score,
  Game: Game
}


//score table: user, game,  time (1/2/3),
