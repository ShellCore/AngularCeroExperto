# Configuración Typescript

Para reconocer que un archivo es de tipo TypeScript, tiene que tener la extensión .ts

Después de escribir el código, y compoilarlo (convertirlo a un JavaScript), se ejecuta el siguiente comando:

```sh
$ tsc <nombre_archivo>.ts

# Modo observador (estará escuchando los cambios del archivo)
$ tsc <nombre_archivo>.ts -w
```

Para inicializar el proyecto

```sh
$ tsc -init
```