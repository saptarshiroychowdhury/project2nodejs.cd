📌 Project: ArgoCD Kubernetes Deployment (CD Repo)
Overview

This repository holds the Kubernetes deployment and service manifests required for Continuous Delivery (CD) using ArgoCD.

ArgoCD watches this repo and automatically syncs changes to the Kubernetes cluster.

🚀 Technologies Used

Kubernetes

ArgoCD

Docker Hub

GitHub

📁 Repository Structure
├── Deployment.yaml
└── Service.yaml

🛠️ Deployment.yaml

Creates:

Deployment

ReplicaSet

Pods (Node.js app)

Key configuration:

Image: saptarshi500/nodejsapp:latest

Replicas: 2

🌐 Service.yaml

Creates:

NodePort service

Exposes port 80 → 3002

To access:

minikube service mynodejsapp

🔄 ArgoCD Flow

Watches this repo

Detects YAML changes

Applies Deployment & Service to the cluster

Keeps cluster in sync

🌟 Outcome

Any update to this repository (e.g., new image tag) instantly triggers redeployment via ArgoCD.
