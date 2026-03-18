# Cafeteria System - Platform Services

Parent repository containing all platform infrastructure services.

## Services

- **config-server**: Centralized configuration management (Port 8888)
- **service-registry**: Netflix Eureka service discovery (Port 8761)
- **api-gateway**: Spring Cloud Gateway API routing (Port 8080)

## Architecture

This is a parent repository that contains individual services as git submodules.

## Build All Services

```bash
mvn clean install
```

## Run All Services

```bash
# Using PM2
pm2 start ecosystem.config.js

# Or build and run individually
cd config-server && mvn spring-boot:run
cd service-registry && mvn spring-boot:run
cd api-gateway && mvn spring-boot:run
```

## Tech Stack

- Java 25
- Spring Boot 4.0.3
- Spring Cloud 2025.1.0
- Maven (Parent POM)

## Repository Structure

```
Cafeteria-System-Platform/
├── config-server/       → Submodule
├── service-registry/    → Submodule
├── api-gateway/         → Submodule
├── pom.xml             → Parent POM
├── ecosystem.config.js → PM2 configuration
└── README.md
```

## Submodule Management

### Clone with submodules
```bash
git clone --recursive https://github.com/ChamathDilshanC/Cafeteria-System-Platform.git
```

### Update submodules
```bash
git submodule update --remote --merge
```

---

**Part of**: [Cafeteria Management System](https://github.com/ChamathDilshanC/Cafeteria-System-Main)
