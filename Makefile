build:
	@wbuild --config ./webpack/webpack.prod.config.js

publish: build
	@qn sync ydj-statics -s dist -p YDJ

.PHONY: build
