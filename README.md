# react_typescript_redux_sagas_docker_axios

.tsx = typescript y jsx

## Install typescript
```
npm install -g typescript
```

## Create typescript and React app
```
npx create-react-app name --typescript 
OR, NEW VERSION:
npx create-react-app name --template typescript
cd name
yarn start
```

## Compile and create .js file
```
tsc fichero.ts
```

## Install ts-node (used to execute .ts scripts)
```
yarn add ts-node
```

## Compile y execute the file, without creating its .js file
```
ts-node fichero.ts
```

## Run project 
```
yarn build
```

Para usar una librería con typescript, (axios, vis === libreria para hacer diagramas, ...) tengo que instalar (si lo pide, algunas tienen @types incluidos), aparte de vis, @types/vis!!!

## Install redux y redux-saga
```
yarn add redux react-redux redux-devtools @types/react-redux redux-saga ( = middleware)
OR
yarn add redux react-redux redux-devtools redux-thunk (= middleware)
```

redux-saga = librería hecha con la intención de facilitar el manejo de efectos secundarios (side effects) (ej. operaciones asíncronas como la obtención de datos (data fetching) y cosas impuras como el acceso al cache del navegador), de manera más eficiente, más simple de probar, y para mejorar el manejo de fallas.
El modelo mental es que una saga represente (a manera de simulación) un hilo diferente en la aplicación y que únicamente sea responsable de los efectos secundarios. redux-saga es un middleware (capa intermedia) de redux, lo que significa que este "hilo" puede ser iniciado, suspendido, y cancelado desde la aplicación principal con una acción cualquiera de redux, tiene acceso a todo el estado (state) de la aplicación en redux y también puede ejecutar (dispatch) acciones en redux.
Usa una de las caracteristicas de ES6 llamada Generadores (Generators) para que procedimientos o operaciones asíncronas sean fáciles de leer, escribir y probar.

## Install axios
```
yarn add axios
```

## Install jest y enzime
```
yarn add @types/jest ts-jest babel-jest -D
yarn add enzyme @types/enzyme enzyme-to-json enzyme-adapter-react-16 -D
```

Jest is a node-based test runner allowing fast parallel running of tests in a node environment. It works out of the box within any Create React App project. Running npm test in a Terminal window within your app directory will initialise Jest and start testing in watch mode — meaning changes to files will re-run the tests associated with those files immediately as you are developing.

Next add a jest.config.js to your project root (outside of src)!

We need to tell Jest to use our Enzyme serializer. Add the following line to the end of jest.config.js:
```
"snapshotSerializers": ["enzyme-to-json/serializer"],
```

Enzyme needs to be configured and instantiated for it to work properly. If it doesn’t already exist, create the file setupTests.js in your src directory.

In order to run jest with ```npm test```, replace or append atest script to your scripts block within your package.json file:
```
...
scripts: {
 "test": "jest",
 ...
}
```