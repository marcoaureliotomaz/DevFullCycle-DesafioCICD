# Dev Full Cycle - Desafio CI/CD

Aplicacao simples em Node.js com uma calculadora de operacoes basicas, testes unitarios com Jest, pipeline de CI no GitHub Actions e integracao com SonarCloud.

## Requisitos

- Node.js 20 ou superior
- npm

## Estrutura do projeto

```text
.
|-- .github/
|   `-- workflows/
|       `-- ci.yaml
|-- src/
|   |-- calculator.js
|   `-- index.js
|-- tests/
|   `-- calculator.test.js
|-- package.json
|-- package-lock.json
|-- README.md
`-- sonar-project.properties
```

## Execucao local

Instale as dependencias:

```bash
npm install
```

Execute a aplicacao:

```bash
npm start
```

Execute os testes:

```bash
npm test
```

O script de teste gera cobertura na pasta `coverage/`, usada pela analise do SonarCloud.

## CI com GitHub Actions

O workflow esta em `.github/workflows/ci.yaml` e executa:

- instalacao de dependencias com `npm ci`
- testes unitarios com `npm test`
- analise do SonarCloud em `push` para `main` e em `pull_request` contra `main`

## Configuracao do SonarCloud

O arquivo `sonar-project.properties` define fontes, testes e o caminho do relatorio de cobertura do Jest.

Para a analise funcionar no GitHub, configure os seguintes secrets no repositorio:

- `SONAR_TOKEN`: token gerado no SonarCloud
- `SONAR_PROJECT_KEY`: chave do projeto no SonarCloud
- `SONAR_ORGANIZATION`: identificador da organizacao no SonarCloud

Depois, importe o repositorio no SonarCloud e vincule-o ao projeto correto.

## Branch protection e checks obrigatorios

Para atender ao desafio, depois de publicar o repositorio e abrir um PR para `main`, configure no GitHub:

- `Require status checks to pass before merging`
- o check do workflow de CI como obrigatorio
- o check `SonarQube Code Analysis` como obrigatorio

O PR deve permanecer aberto para avaliacao.
