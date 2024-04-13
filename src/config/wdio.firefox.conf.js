const { config } = require("./wdio.conf");

config.capabilities = [{
    browserName: 'firefox'
}]

config.services = ['geckodriver']

exports.config = config;