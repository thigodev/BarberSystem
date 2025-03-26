# Configuração do BarberSystem

## Pré-requisitos
Antes de iniciar a configuração do projeto, verifique se sua máquina atende aos seguintes requisitos:

- **Windows**: Configurar o WSL (Windows Subsystem for Linux);
- **Docker**: Instalar o Docker na máquina;
- **Node.js**: Instalar a versão mais recente do Node.js.

## Passos para Configuração

### 1. Clonar o Repositório

No terminal, execute o seguinte comando para clonar o repositório:
```sh
 git clone <URL_DO_REPOSITORIO>
```

### 2. Instalar as Dependências

#### **Front-end**
1. Acesse o diretório do front-end:
   ```sh
   cd front
   ```
2. Instale as dependências com o seguinte comando:
   ```sh
   npm install
   ```
3. Para iniciar o front-end, utilize:
   ```sh
   npm start
   ```

#### **Back-end**
1. Acesse o diretório do back-end:
   ```sh
   cd back
   ```
2. Instale as dependências utilizando:
   ```sh
   npm ci
   ```
3. Para iniciar o back-end, utilize:
   ```sh
   npm run dev:server
   ```

### 3. Configuração do Banco de Dados

Para executar as migrações do banco de dados, utilize o comando abaixo:
```sh
yarn yarn ts-node-dev ./node_modules/typeorm/cli.js -d src/shared/infra/database/index.ts migration:run
```

Caso o **Yarn** não esteja instalado na sua máquina, instale-o executando o seguinte comando no PowerShell (com permissões de administrador):
```sh
npm install -g yarn
```
Após a instalação, você poderá rodar as migrações normalmente.

---
Agora seu ambiente de desenvolvimento está pronto para rodar o BarberSystem! 🚀


