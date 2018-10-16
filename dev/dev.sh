#!/bin/bash
#### script para ejecutar el entorno de desarrollo
#### se debe copiar a la par de la carepta src del sistema a desarrollar.
#### ajustar los puertos y el nombre del contenedor temporal
echo "corriendo en el puerto localhost:11105"
docker run --rm -ti --name ingreso-ui -v $(pwd)/src:/src -p 11105:4200 desarrollo-ui
