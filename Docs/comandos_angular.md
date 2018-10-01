# Comandos Angular

En este archivo se agregan los comandos utilizados en el curso de Angular.

```sh
# Se crea un nuevo proyecto de Angular, que se almacenará en la carpeta my-app
$ ng new my-app

# Deploy del proyecto
# -o : Al terminar el deploy, abre una pestaña nueva en el navegador predeteminado
# -p 4200 : Configura el puerto predeterminado en donde va a correr el proyecto. Por default, siempre será el 4200
$ ng serve -o -p 4200

# Crear un nuevo componente en la carpeta determinada
# $ ng generate component components/<nombre-componente>
$ ng g c components/footer

# Crear un nuevo pipe en la carpeta predeterminada
# $ ng genetate pipe pipes/<nombre-componente>
$ ng g p pipes/customPipe

# Crear un nuevo módulo, para el control de los elementos creados (--flat: crealo en el mismo folder, en este caso, raiz)
# ng generate module <nombre-modulo> --flat
$ ng g m material --flat

# Cuando existe más de 1 módulo, hay que definir cual es el predeterminado
$ ng g c components/mapa --module-app=app.module

# No se crea el archivo de pruebas spec.ts
$ ng g c components/component --spec=false

# No se crea archivo de estilos css
$ ng g c components/component -is

# No se crea archivo html
$ ng g c components/component -it
```

