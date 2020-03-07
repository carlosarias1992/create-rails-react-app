.DEFAULT_GOAL := help

TODAY := $(shell date -u +%Y%m%d)
export START_TIME := $(shell date -u +%s)

.PHONY: help
help:
	@echo ""
	@echo "OPERATE:"
	@echo "install                  Install backend and frontend dependencies"
	@echo "init_db                  Initial application setup"
	@echo "build                    Build images"
	@echo "start                    Start containers"
	@echo "start_backend            Start only the containers needed for the backend"
	@echo "down                     Stop all containers"
	@echo "restart                  Stop then start containers"
	@echo "restart_frontend         Clean frontend images and start containers"
	@echo ""
	@echo "DEBUGGING:"
	@echo "bash                     Bash shell inside Rails Docker container"
	@echo "attach                   Attach input/output to Rails container for debugging"
	@echo "logs                     Re-attach to running container logs"
	@echo "log                      Re-attach to specified running container log"
	@echo ""
	@echo "MAINTENANCE:"
	@echo "clean                    Remove dangling images and exited containers"
	@echo "clean_volumes            Prune data volumes"
	@echo ""
	@echo "TESTING:"
	@echo "backend_test             Runs all backend tests"
	@echo "frontend_test            Runs all frontend tests"
	@echo "test                     Runs all backend and frontend tests"
	@echo ""

.PHONY: elapsed_time
elapsed_time:
# This doesn't work unless make is run with -e option.
	@echo "$$(( `date -u +%s` - $(START_TIME) )) seconds elapsed"

.PHONY: build
build:
	docker-compose build --pull --parallel --no-cache
	@docker-compose run backend gem install bundler
	@docker-compose run frontend yarn install
	@make init_db
	@make elapsed_time
	@echo "All built 🏛"

.PHONY: init_db
init_db:
	@docker-compose exec backend sh -c "rails db:create && rails db:migrate && rails db:seed"

.PHONY: install
install:
	@docker-compose run frontend yarn install
	@docker-compose run backend bundle update

.PHONY: start
start:
	@docker-compose up -d
	@docker-compose logs --tail 10 -f

.PHONY: start_backend
start_backend:
	@docker-compose -f docker-compose-only-backend.yml up -d
	@docker-compose logs --tail 10 -f

.PHONY: logs
logs:
	docker-compose logs -f --no-color > "backend/logs/$(TODAY).log" &
	docker-compose logs -f

.PHONY: log
log:
	@if test -z $(name); then\
	    	echo "";\
	  	echo "Please enter a container name as argument,";\
	    	echo "";\
         	echo "  e.g. 'make log name=backend'";\
	    	echo "";\
		echo "or use 'make logs' to attach to all container logs.";\
	    	echo "";\
	  	echo "Available container names are:";\
          	echo "  backend";\
	  		echo "  db";\
	else\
	  docker-compose logs -f $(name);\
	fi

.PHONY: docker_attach attach
docker_attach: attach
attach:
	docker ps | grep 'justified_backend' | cut -d ' ' -f1 | xargs -o docker attach

.PHONY: down
down:
	docker-compose stop

.PHONY: bash
bash:
	docker-compose exec backend bash

.PHONY: clean
clean:
	@echo "Deleting exited containers..."
	docker ps -a -q -f status=exited | xargs docker rm -v
	@echo "Deleting dangling images..."
	docker images -q -f dangling=true | xargs docker rmi
	@make elapsed_time
	@echo "All clean 🛀"

.PHONY: clean_volumes
clean_volumes:
	@echo "Prune volumes (WARNING: includes your existing database volume if your containers are stopped)..."
	@docker volume prune
	@make elapsed_time
	@echo "All clean 🛀"

.PHONY: restart
restart:
	@echo "make down => make start"
	@make down
	@make start

.PHONY: restart_frontend
restart_frontend: down clean
	@docker images justified_frontend:latest -q | xargs docker rmi
	@docker-compose build frontend
	@docker-compose up -d
	@docker-compose logs --tail 10 -f

.PHONY: backend_test
backend_test:
	@docker-compose run backend rails test

.PHONY: frontend_test
frontend_test:
	@docker-compose run frontend yarn test-ci

.PHONY: test
test:
	@make backend_test
	@make frontend_test
