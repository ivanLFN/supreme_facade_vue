# This is a template makefile for a project.  The precise contents are not too important; however, your Makefile *must* have build, package,
# test and regress build targets.  Failure to have these targets will guarantee that your project fails in the CI server.

# https://makefiletutorial.com/


IS_WINDOWS := $(shell uname -r | grep Microsoft && echo matched)
IS_LINUX := $(shell uname | grep Linux && echo matched)
IMAGE_NAME_WEB_UI:="sf-web-vue:local"
DOCKER_REGISTRY:="fix me"
AWS_REGION:=us-east-1
VERSION:=$(shell git describe --tags)
DOCKER_PROJECT_NAME:=sf-web-vue


default:
	@-echo 'No default build target exists.  Use one of: build, test, regress, or package'
	@exit 1

# These are the required targets.  Removing these targets will break your project in the CI system.
# On failure they should exit with a non-zero exit code.


init:
ifdef IS_WINDOWS
	@-echo "WINDOWS detected. Installing necessary python packages"
	pip install pre-commit
else ifdef IS_LINUX
	apt-get -y install pre-commit ruby
else
	brew install pre-commit
# Git Leaks require
	brew install go
endif
	pre-commit install

d-login:
	aws ecr get-login-password --region ${AWS_REGION} | docker login ${DOCKER_REGISTRY} --username AWS --password-stdin

build:
	make d-build
	make docker-tag

d-build:
	docker build \
		--tag $(IMAGE_NAME_WEB_UI) \
		--file ./build/app/Dockerfile \
		.

docker-tag:
	docker tag $(IMAGE_NAME_WEB_UI) ${DOCKER_REGISTRY}:${VERSION}
	docker tag $(IMAGE_NAME_WEB_UI) ${DOCKER_REGISTRY}:latest


d-push:
	docker push ${DOCKER_REGISTRY}:${VERSION}
	docker push ${DOCKER_REGISTRY}:latest


run:
	docker-compose -p ${DOCKER_PROJECT_NAME} \
	-f build/docker-compose.yml \
	up -d --build

exec:
	@docker-compose -p ${DOCKER_PROJECT_NAME} \
	-f build/docker-compose.yml \
	exec app sh

build-sandbox:
	docker-compose -p ${DOCKER_PROJECT_NAME} \
	-f build/docker-compose.yml \
	build --no-cache

test:
	@make TARGET=development run
	@docker-compose -p ${DOCKER_PROJECT_NAME} \
	-f build/docker-compose.yml \
	exec app \
	bash -c "npm run test:unit"

sandbox:
	@make run
	@make exec


sandbox-prod:
	@make TARGET=production	run
	@make exec
