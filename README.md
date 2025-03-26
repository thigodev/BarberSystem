Passos para configurar o BarberSystem:

- Configurar o WSL se a máquina for Windows;
- Instalar o Docker;
- Instalar o Nodejs na máquina;

Agora no ambiente de desenvolvimento:

- Clonar o repositório do git;
- No terminal usar o seguinte comando: git clone url;
- Instalar as dependências do front e back;

Instalando as dependências do Front-end:

- Entrar no diretório do front;
- Usar o seguinte comando: npm install. Automaticamente as dependências serão instaladas;
- Agora nas próximas vezes utilizar npm start para iniciar o front-end.

Instalando as dependências do back-end:

- Entrar no diretório do back;
- Usar o seguinte comando: npm ci. Automaticamente estará instalando as dependências a partir das versões em que o arquivo package.json está designado.
- E nas próximas vezes utilizar o npm run dev:server. Isso estará iniciando o backend.

E por fim lembrar sempre de startar as migrações do banco de dados:

- Para startar as migrações basta utilizar o comando: yarn yarn ts-node-dev ./node_modules/typeorm/cli.js -d src/shared/infra/database/index.ts migration:run
- Se sua máquina não tiver o YARN configurado, basta ir no powershell admin e usar o seguinte comando: npm install global yarn. Após isso poderá usar o comando das migrações mencionado no tópico acima.
