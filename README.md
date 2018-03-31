
# TODO

1. complete readme.md
2. .editorconfig
3. .eslint
4. more test

# dev step

1. clone to your repository
2. write unit test spec -> push
2. write ejs

# structure

```
rootDir/
|-- .vscode/*                   - vscode config
|-- model/**.js                 - API def
|-- public/
|   |-- images/**               - img
|   |-- javascript/**           - js or other in library
|-- routes/
|   |-- set.js
|   |-- {{page}}.js             - express route
|-- tests/
|   |-- mocha/
|   |   |-- {{page}}.mocha.js   - mocha unit test
|   |-- .eslintignore           - eslint ignore
|   |-- .eslintrc               - eslint config
|-- views/
|   |-- vue/
|   |   |-- common/             - 
|   |   |-- {{page}}/           - 
|   |   |   |-- index.js        - main js entry
|   |   |   |-- {{page}}.vue    - vue component entry
|   |-- ejs/{{page}}.ejs        - ejs template
|-- webpack/
|   |-- set.js
|   |-- webpack.dev.js          - dev webpack
|   |-- webpack.prod.js         - prod webpack
|-- .gitignore                  - git ignore config
|-- .editorconfig               - editor spec
|-- config.json                 - server config
|-- server.js                   - run express server
|-- package.json                - node project info
```
