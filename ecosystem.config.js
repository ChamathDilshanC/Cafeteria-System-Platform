module.exports = {
  apps: [
    {
      name: 'config-server',
      script: 'java',
      args: ['-jar', 'config-server/target/config-server-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8888
      }
    },
    {
      name: 'service-registry',
      script: 'java',
      args: ['-jar', 'service-registry/target/service-registry-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8761
      }
    },
    {
      name: 'api-gateway',
      script: 'java',
      args: ['-jar', 'api-gateway/target/api-gateway-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8080,
        CONFIG_SERVER_URI: 'http://localhost:8888',
        EUREKA_URI: 'http://localhost:8761/eureka'
      }
    }
  ]
};
