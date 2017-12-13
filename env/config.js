var config = {
    development: {
        //Development database url
        dburl: 'mongodb://localhost/suggestionBoxDB',
        secret :'kjsdhfjskdhfjskhfuefhksdjfhksdjfkjsdhfjskdhfjskhfue2122232425262728292010fhks2122232425262728292010djfh2122232425262728292010k2122232425262728292010sdjf',
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production:{
        dburl: 'mongodb://njabulothwala23:njabulothwala23@cluster0-shard-00-00-ij80q.mongodb.net:27017,cluster0-shard-00-01-ij80q.mongodb.net:27017,cluster0-shard-00-02-ij80q.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
        server: {
            host: 'http://ec2-34-235-230-124.compute-1.amazonaws.com',
            port: '3000'
        },
        secret: '123Secret?456?anothersecret??**how_Have_=_uBeen_BoBBo..<<kjsdh5262728292010k21sdfsdf2s22324252627sdfsdfsdf28292010sdjf>>:""QWE nm.,nmdgdfgdfgd'
    }
    };
    module.exports = config;
