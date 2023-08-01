module.exports = {
    apps: [
        {
            name: "valeSiteDevelopment",
            script: "npm run startDevelopment",
            env: {
                NODE_PORT: 3020,
                ENVIROMENT: "development"
            },
            time: true
        },
        {
            name: "valeSiteStaging",
            script: "npm run startStaging",
            env: {
                NODE_PORT: 3010,
                ENVIROMENT: "staging"
            },
            time: true
        },
        {
            name: "valeSiteProduction",
            script: "npm run startProduction",
            env: {
                NODE_PORT: 3000,
                ENVIROMENT: "development"
            },
            time: true
        },
    ]   
}