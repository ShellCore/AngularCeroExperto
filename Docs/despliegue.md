# Despliegue a preproducción y producción

## Descripción

Para poder desplegar un proyecto de angular se utiliza el siguiente comando:

```sh
$ ng build
```

Este generará los componentes de JavaScript necesarios en la carpeta __dist__, para posteriormente desplegarlos en algún servidor provicional.

En este caso, el despliegue se realizó en modo de preproducción, ya que se seguiran mostrando los mensajes de error en modo debug. Para lograr que se generen los componentes completamente para producción, se debe de modificar el archivo __environment.ts__, cambiando la bandera 'production' a true. Guardamos los cambios y escribimos el siguiente comando:

```sh
$ ng build --prod
```

