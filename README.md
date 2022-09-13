# NLW ESports



## Server
* ```npm init -y```
* ```npm install express```
* ```npm i -D typescript```
* ```npx tsc --init```
* ```npm i -D @types/express```
* ```npm i -D ts-node-dev```

## Web
* **Vite:** - ```npm create vite@latest``` -  converter code para ser entendido pelo navegador
* ```npm install -D tailwindcss postcss autoprefixer```
* ```npx tailwindcss init -p```
```js
//tailwind.config.cjs
content: [
    './src/**/*.tsx'
  ],
```
```css
/* src/styles/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Mobile
* **expo** - ```npm install -g expo-cli```- Criar o projeto e visualizar pelo celular
* ```expo init mobile```