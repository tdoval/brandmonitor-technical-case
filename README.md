# brandmonitor-technical-case
Repositório com 3 aplicações: 1a frontend react, 2a backend nestjs e 3a um robô de processamento em golang.  Essas 3 aplicações deve configurar os parâmetros de busca no google (localidade, frequência e palavra chaves), deve simular uma pesquisa no google e gravar seus resultados em collections no mongodb.
![Test Case Img](https://imgbox.com/upload/edit/809752056/n6NUss1swI6no7r0)

## Inicializando o Projeto
1.  Clone este repositório em seu computador: `git clone https://github.com/tdoval/brandmonitor-technical-case`
2. Vá para o projeto react-frontend `cd  ./react-frontend` e execute os seguintes comandos: `npm install` e `npm run dev` é possível visualizar a aplicação na URL: http://localhost:5173/
3. Volte para o repositório principal `cd ..` e navegue para o projeto de backend `cd ./nest-backend` instale e inicie o servidor `npm i` `npm run start:dev`. O servidor estará disponível na porta 3000. http://localhost:3000/
4. Volte para o repositório principal `cd ..` e navegue para o projeto robot `cd ./google-robot` inicie o serviço `go run main.go`

Para executar este projeto, você precisará ter instalado em sua máquina [NodeJS](https://nodejs.org/) e [Go](https://go.dev/)

