var config = {
    development: {
        //Development database url
        dburl: 'mongodb://localhost/suggestionBoxDB',
        
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production:{
        //Production database url
        dburl: 'mongodb://njabulothwala23:TomasCook23%3F@cluster0-shard-00-00-kpwka.mongodb.net:27017,cluster0-shard-00-01-kpwka.mongodb.net:27017,cluster0-shard-00-02-kpwka.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',

        //yet to configure aws settings
        server: {
            host: '127.0.0.1',
            port: '3000'
        },

        secret: '123Secret?456?anothersecret??**how_Have_=_uBeen_BoBBo..<<>>:""QWE nm.,nmdgdfgdfgd'

    }
    };
    module.exports = config;
