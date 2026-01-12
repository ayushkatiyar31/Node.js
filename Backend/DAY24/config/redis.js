
const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'z70qrytflgdS9U56txdEsWNOGgXRO1C3',
    socket: {
        host: 'redis-11850.crce206.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 11850
    }
});



module.exports = redisClient;
