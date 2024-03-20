#!/bin/bash

case "$1" in
  start-dev)
    # Comando para iniciar os contêineres do Docker
    echo "Iniciando contêineres do Docker..."
    docker-compose up
    ;;
  stop-dev)
    # Comando para parar os contêineres do Docker
    echo "Parando contêineres do Docker..."
    docker-compose down
    ;;
  restart-dev)
    # Comando para reiniciar os contêineres do Docker
    echo "Reiniciando contêineres do Docker..."
    docker-compose restart
    ;;
  *)
    echo "Usage: $0 {start-dev|stop-dev|restart-dev}"
    exit 1
    ;;
esac

exit 0
