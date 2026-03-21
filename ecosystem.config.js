module.exports = {
  apps: [
    {
      name: 'config-server',
      script: 'java',
      args: ['-jar', 'config-server/target/config-server-1.0.0.jar'],
      log_file: 'logs/config-server.log',
      cwd: './',
      env: {
        SERVER_PORT: 9000,
        SPRING_PROFILES_ACTIVE: 'git',
      },
    },
    {
      name: 'service-registry',
      script: 'java',
      args: ['-jar', 'service-registry/target/service-registry-1.0.0.jar'],
      log_file: 'logs/service-registry.log',
      cwd: './',
      env: {
        SERVER_PORT: 8761,
        CONFIG_SERVER_URI: 'http://localhost:9000',
      },
    },
    {
      name: 'api-gateway',
      script: 'java',
      args: ['-jar', 'api-gateway/target/api-gateway-1.0.0.jar'],
      log_file: 'logs/api-gateway.log',
      cwd: './',
      env: {
        SERVER_PORT: 8080,
        CONFIG_SERVER_URI: 'http://localhost:9000',
        EUREKA_URI: 'http://localhost:8761/eureka',
      },
    },
  ],
};
