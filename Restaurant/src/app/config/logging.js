require('express-async-errors');
const { createLogger, transports } = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({ filename: 'logfile.log' }),
    ],
    exceptionHandlers: [
        new transports.Console({colorize : true, prettyPrint: true}),
        new transports.File({ filename: 'exceptions.log' })
    ]
});
// TODO: END AND RESTART THE CONNECTION AFTER HANDLING ERRORS

process.on('unhandledRejection', (ex) => {
    throw ex;
});

// module.exports = logger;