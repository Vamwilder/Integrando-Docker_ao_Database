Realizando testes de integração Entre containers

1. Subir DB MySQL
docker run -d \
  --name mysql-container \
  -e MYSQL_ROOT_PASSWORD=senha123 \
  -e MYSQL_DATABASE=meu_banco \
  -p 3306:3306 \
  mysql:8
