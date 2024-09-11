# Bravi Avaliação 2 - API de Pessoas e Contatos

Esta API permite gerenciar pessoas e seus contatos (telefone, e-mail, WhatsApp) seguindo os princípios RESTful e SOLID.

## Requisitos

- Node.js (versão 18 ou superior)
- MongoDB (se executando localmente)
- Docker e Docker Compose (para executar em contêineres)

## Configuração e Execução

### 1. Arquivos de Configuração

Os arquivos Dockerfile e docker-compose.yml já estão incluídos no repositório. Aqui está uma breve descrição de cada um:

- Dockerfile: Define a imagem Docker usada para criar o ambiente do projeto.
- docker-compose.yml: Define o serviço Docker Compose para facilitar a execução do projeto. Você pode revisar o conteúdo desses arquivos no repositório para entender a configuração do ambiente.

### 2. Executando Localmente

#### Passo 1: Clonar o Repositório

```
git clone https://github.com/seu-usuario/bravi-avaliacao-2.git
cd bravi-avaliacao-2
```
#### Passo 2: Instalar Dependências

```
npm install
```

#### Passo 3: Configurar o MongoDB

Certifique-se de que o MongoDB está rodando localmente na porta 27017.

#### Passo 4: Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bravi-avaliacao-2
```

#### Passo 5: Iniciar a API

```
npm run dev
```

A API estará disponível em http://localhost:3000.

### 2. Executando com Docker

#### Passo 1: Construir a Imagem Docker

```
docker build -t bravi-avaliacao-2 .
```

#### Passo 2: Executar o Contêiner Docker

Certifique-se de que o MongoDB está rodando (seja localmente ou em um contêiner separado). Use o seguinte comando para rodar a API:

```
docker run -p 3000:3000 --env-file .env bravi-avaliacao-2
```

### 3. Executando com Docker Compose

#### Passo 1: Executar com Docker Compose

```
docker-compose up --build
```

A API estará disponível em http://localhost:3000.

## Endpoints da API

### Criar Pessoas

- URL: /api/persons
- Método: POST
- Body: JSON com os dados da pessoa ou lista de pessoas.

Exemplo de requisição para criar múltiplas pessoas:

```
[
  {
    "name": "João",
    "age": 30
  },
  {
    "name": "Maria",
    "age": 25
  }
]
```

### Obter Todas as Pessoas
- URL: /api/persons
Método: GET

### Obter Pessoa por ID
- URL: /api/persons/:id
- Método: GET

### Atualizar Pessoa
- URL: /api/persons/:id
- Método: PUT
- Body: JSON com os dados atualizados da pessoa.

### Excluir Pessoa
- URL: /api/persons/:id
- Método: DELETE
