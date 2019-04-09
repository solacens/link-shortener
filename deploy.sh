#!/bin/bash

# Redis
kubectl apply -f kubernetes/redis-operator-crd.yml
kubectl apply -f kubernetes/redis-failover.yml

while [ $(kubectl get po -l app=redis-failover,component=redis --no-headers | grep Running | wc -l) -lt 3 ]; do
  echo "Waiting for all redis to get online"
  sleep 5
done

# Replica set
kubectl apply -f kubernetes/app-service.yml
kubectl apply -f kubernetes/app-deployment.yml
