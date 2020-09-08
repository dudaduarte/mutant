dev:
	@docker-compose exec app node_modules/.bin/nodemon src/index.js

lint-all:
	@node_modules/.bin/eslint --config .eslintrc.js 'src/**/*.js'

lint-fix:
	@node_modules/.bin/eslint --config .eslintrc.js 'src/**/*.js' --fix

test-all:
	@docker-compose exec app ./node_modules/.bin/mocha 'test/**/*.js'

init:
	@npm install
	@docker-compose up -d

down:
	@docker-compose down
