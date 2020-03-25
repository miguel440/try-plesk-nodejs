const npm = require('npm');

npm.load(() => npm.run(`start`, '-p', process.env.PORT));