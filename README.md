# Link Shortener

> Link Shortener Service for Kubernetes

---
## Design

- Redis HA with sentinel as storage that has failover feature
- API services with core function and read/write from redis that can be scaled
- User can use __*Service Annotation*__ or __*Ingress*__ to control traffics to API service pods

---
## Usage

```sh
# Deploy to current context with current namespace
sh ./deploy.sh 
```

---
### Dev/Build/Deploy

```sh
# Dev
yarn # Get dependencies
node main.js # Connects Redis HA with sentinel locally

# Build and push image
sh build.sh
```
