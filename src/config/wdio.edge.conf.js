const { config } = require("./wdio.conf");

config.capabilities = [{
    browserName: 'MicrosoftEdge'
}]

config.services = ['edgedriver']

exports.config = config;