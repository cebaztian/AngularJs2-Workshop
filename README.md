## Prerequisitos

Node.js y npm https://docs.npmjs.com/getting-started/installing-node <br />
Un IDE, les recomiendo Visual Studio Code https://code.visualstudio.com
 
** Verficar versiones

Node.js

```bash
node -v
```
NPM 

```bash
npm -v
```

## Descargar proyecto

Clonemos este repositorio, para hacerlo abrimos una consola y nos ubicamos en el folder donde lo queremos descargar y ejecutamos
```bash
git clone  https://github.com/sebazburgos/AngularJs2-Workshop  AngularJs2
cd AngularJs2
```

### Crear nuestro repositorio a partir de este

Primero eliminemos todo rastro del repositorio anterior
```bash
rd .git /S/Q # windows
```
Luego creemos nuestro proyecto
```bash
git init
git add .
git commit -m "Primer commit"
```
Por ultimo creemos en github nuestro propio repositorio y realicemos nuestro primer commit <br />
(Ejemplo: *`https://github.com/<usuario>/nombre-proyecto.git`*). <br />
Para esto debemos ejecutar los siguientes comandos. <br />

```bash
git remote add origin https://github.com/<usuario>/nombre-proyecto.git
git push -u origin master
```

## Instalar dependencias

Vamos a instalar todas las dependencias configuradas en `package.json`

**Es necesario abrir una consola como administrador**.

```bash
npm install
npm start
```

### npm scripts

Esta es una breve descripción de algunos comandos pre-configurados en el archivo `package.json`:

* `npm start` - Compila el código, ejecuta el servidor y actualiza los cambios.
* `npm run tsc` - Ejecuta el compilador de Typescript
* `npm run tsc:w` - Ejecuta el compilador de Typescript y siempre esta revisando cambios en el código para actualizarlos en servidor.
* `npm run lite` - Inical el servidor local.
* `npm run postinstall` - se ejecuta luego de instalar las dependencias con el fin de instalar las dependencias de Typescript

## Testing

Para ejecutar las pruebas unitarias escritas en karma ejecutamos el siguiente comando:<br />
```bash
npm test
```
Para ejecutar las pruebas funcionales de protractor escritas en e2e-spec.js ejecutamos el siguiente comando:<br />
```bash
npm run e2e
```
