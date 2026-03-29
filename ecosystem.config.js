module.exports = {
  apps: [
    {
      name: 'service-registry',
      script: 'java',
      args: '-jar service-registry/target/service-registry-1.0.0.jar --server.port=9001',
      log_file: './logs/service-registry.log',
    },
    {
      name: 'config-server',
      script: 'java',
      args: '-jar config-server/target/config-server-1.0.0.jar --eureka.client.service-url.defaultZone=http://localhost:9001/eureka/',
      log_file: './logs/config-server.log',
      delay: 15000,
    },
    {
      name: 'api-gateway',
      script: 'java',
      args: '-jar api-gateway/target/api-gateway-1.0.0.jar --spring.config.import=optional:configserver:http://localhost:9000 --eureka.client.service-url.defaultZone=http://localhost:9001/eureka/',
      log_file: './logs/api-gateway.log',
      delay: 30000,
    },
  ],
};
