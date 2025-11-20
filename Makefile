# Root Makefile for multi-tenant quote app
# All comments and targets are in English.

PROJECT_NAME := multi-tenant-quote-app
COMPOSE_FILE := deploy/docker-compose.yml
DC := docker compose -f $(COMPOSE_FILE)

.DEFAULT_GOAL := help

.PHONY: help
help:
	@echo ""
	@echo "Available commands:"
	@echo "  make build           Build all docker images"
	@echo "  make up              Start all services in background"
	@echo "  make up-dev          Start services with build (development)"
	@echo "  make down            Stop and remove containers, networks"
	@echo "  make restart         Restart all services"
	@echo "  make logs            Follow logs for all services"
	@echo "  make logs-backend    Follow logs for backend service"
	@echo "  make backend-shell   Open a shell inside backend container"
	@echo "  make mongo-shell     Open a mongo shell inside mongo container"
	@echo "  make redis-cli       Open redis-cli inside redis container"
	@echo ""

# ------------------------------
# Docker lifecycle
# ------------------------------

.PHONY: build
build:
	$(DC) build

.PHONY: up
up:
	$(DC) up -d

.PHONY: up-dev
up-dev:
	$(DC) up -d --build

.PHONY: down
down:
	$(DC) down

.PHONY: restart
restart: down up

.PHONY: logs
logs:
	$(DC) logs -f

.PHONY: logs-backend
logs-backend:
	$(DC) logs -f backend

# ------------------------------
# Shell access
# ------------------------------

.PHONY: backend-shell
backend-shell:
	$(DC) exec backend /bin/bash

.PHONY: mongo-shell
mongo-shell:
	$(DC) exec mongo mongo

.PHONY: redis-cli
redis-cli:
	$(DC) exec redis redis-cli
