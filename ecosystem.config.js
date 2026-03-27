module.exports = {
  apps: [
    {
      name: 'config-server',
      script: 'java',
      args: '-jar config-server/target/config-server-1.0.0.jar',
      log_file: './logs/config-server.log',
    },
    {
      name: 'service-registry',
      script: 'java',
      args: '-jar service-registry/target/service-registry-1.0.0.jar',
      log_file: './logs/service-registry.log',
    },
    {
      name: 'api-gateway',
      script: 'java',
      // මෙතන අනිවාර්යයෙන්ම Config Server එකේ IP එක දෙන්න (10.148.0.6)
      args: '-jar api-gateway/target/api-gateway-1.0.0.jar --spring.config.import=configserver:http://10.148.0.6:9000',
      log_file: './logs/api-gateway.log',
    },
  ],
};
