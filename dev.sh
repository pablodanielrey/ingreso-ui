#!/bin/bash
echo "abrir el explorador en localhost:11105"
docker run --rm -ti -v $(pwd)/src:/src -p 11105:4200 ingreso-ui /bin/sh
