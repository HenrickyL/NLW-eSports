# NLW ESports



## Server
* ```npm init -y```
* ```npm install express```
* ```npm i -D typescript```
* ```npx tsc --init```
* ```npm i -D @types/express```
* ```npm i -D ts-node-dev```
* ```npm i -D prisma```
* ```npx prisma init --datasource-provider sqlite```
* ```npx prisma migrate dev```
  * add name
* ```npx prisma studio``` - visualizar os dados
* **Schema:**
  * `@id`
  * `game Game @relation(fields: [gameId], references: [id])`
  * `Ad Ad[]`
* `npm i @prisma/client`
* **Validation:** Zod js (inserir depois)
* `npm i cors`
* `npm i -D @types/cors`
  
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
* **Phosphor-react** - ```npm i phosphor-react```
* **Componentes acessiveis:**
  * headless.ui
  * radix
    * `npm i @radix-ui/react-dialog` 

# Mobile
* **expo** - ```npm install -g expo-cli```- Criar o projeto e visualizar pelo celular
* ```expo init mobile```
* ```expo install expo-font @expo-google-fonts/inter```
* ```expo install react-native-screens react-native-safe-area-context ```
* ```expo install expo-linear-gradient```
* **React Navigation:** navegação entre paginas
  * `npm i @react-navigation/native`
  * `npm i @react-navigation/native-stack`
  * 
