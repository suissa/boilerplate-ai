# 🚀 Monorepo Nx - React + NestJS

> Sistema de autenticação por código com arquitetura limpa e design patterns SOLID

## 📋 Sobre o Projeto

Este é um boilerplate de monorepo utilizando **Nx** com **React** (frontend) e **NestJS** (backend), implementando um sistema de autenticação seguro baseado em códigos únicos enviados por email.

### 🎯 Objetivos

- **Segurança**: Sistema de login sem senhas, usando códigos únicos
- **Escalabilidade**: Arquitetura limpa e design patterns SOLID
- **Manutenibilidade**: Código bem estruturado e documentado
- **Reutilização**: Base sólida para futuros módulos

## 🏗️ Arquitetura

### Clean Architecture + DDD

```
📁 apps/
├── 🎨 frontend/          # React + Vite + Material-UI
└── 🔧 backend/           # NestJS + TypeORM + MongoDB

📁 libs/
└── 🔗 shared/            # Tipos e utilitários compartilhados
```

### Fluxo de Autenticação

#### 🔐 Cadastro de Novo Usuário

1. Cliente envia nome e email
2. Sistema gera código de login único (6 dígitos)
3. Sistema envia código por email
4. Cliente digita código para ativar conta
5. Cliente é logado automaticamente

#### 🔑 Login de Usuário Existente

1. Cliente clica em "Login"
2. Cliente digita email
3. Sistema gera novo código de login
4. Sistema envia código por email
5. Cliente digita código para logar
6. Cliente é logado na plataforma

## 🛠️ Tecnologias

### Backend

- **Framework**: NestJS
- **ORM**: TypeORM
- **Database**: MongoDB
- **Email**: Nodemailer
- **Validação**: class-validator
- **Rate Limiting**: rate-limiter-flexible
- **Hash**: bcrypt

### Frontend

- **Framework**: React 18
- **Bundler**: Vite
- **UI Library**: Material-UI
- **Routing**: React Router
- **HTTP Client**: Axios
- **State Management**: React Context
- **Language**: TypeScript

### Monorepo

- **Workspace**: Nx
- **Package Manager**: npm/yarn
- **Language**: TypeScript

## 📁 Estrutura do Projeto

```
exemplo/
├── 📁 apps/
│   ├── 🎨 frontend/          # React + Vite + Material-UI
│   │   ├── src/
│   │   │   ├── domain/       # Entidades, Interfaces
│   │   │   ├── application/  # Use Cases, Services
│   │   │   ├── infrastructure/ # API, Storage
│   │   │   └── presentation/ # Components, Pages
│   │   └── package.json
│   └── 🔧 backend/           # NestJS + TypeORM + MongoDB
│       ├── src/
│       │   ├── domain/       # Entidades, Value Objects, Interfaces
│       │   ├── application/  # Use Cases, DTOs
│       │   ├── infrastructure/ # Implementações concretas
│       │   └── presentation/ # Controllers, Middlewares
│       └── package.json
├── 📁 libs/
│   └── 🔗 shared/            # Tipos e utilitários compartilhados
├── 📁 tools/                 # Scripts e configurações
├── 📄 .cursorrules           # Regras do projeto
├── 📄 SCOPE.md              # Escopo detalhado
├── 📄 PROJECT_STATUS.md     # Status do projeto
├── 📄 nx.json
├── 📄 package.json
└── 📄 README.md
```

## 🔐 Segurança

### Medidas Implementadas

- ✅ **Códigos únicos**: 6 dígitos aleatórios
- ✅ **Expiração**: 10 minutos por código
- ✅ **Rate limiting**: 3 tentativas por email/hora
- ✅ **Tentativas limitadas**: Máximo 3 por código
- ✅ **Logs de segurança**: Rastreamento de tentativas
- ✅ **Validação de entrada**: Sanitização de dados

## 🌐 APIs

### Endpoints de Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/auth/register` | Cadastrar novo usuário |
| `POST` | `/auth/login` | Solicitar código de login |
| `POST` | `/auth/verify-code` | Verificar código de login |
| `GET` | `/auth/me` | Dados do usuário logado |
| `POST` | `/auth/logout` | Logout do usuário |

### Respostas Padrão

```typescript
// ✅ Sucesso
{
  "success": true,
  "data": { ... },
  "message": "Operação realizada com sucesso"
}

// ❌ Erro
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": [...]
  }
}
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- MongoDB
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd exemplo

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# 4. Execute o projeto
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Executa frontend e backend
npm run dev:frontend # Apenas frontend
npm run dev:backend  # Apenas backend

# Build
npm run build        # Build de produção
npm run build:frontend
npm run build:backend

# Testes
npm run test         # Executa todos os testes
npm run test:frontend
npm run test:backend

# Linting
npm run lint         # Verifica código
npm run lint:fix     # Corrige problemas de linting
```

## 📝 Variáveis de Ambiente

### Backend (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/auth-app

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app

# JWT
JWT_SECRET=seu-jwt-secret
JWT_EXPIRES_IN=1h

# Rate Limiting
RATE_LIMIT_WINDOW=3600000
RATE_LIMIT_MAX_REQUESTS=3

# App
PORT=3001
NODE_ENV=development
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Auth App
```

## 🧪 Testes

### Estrutura de Testes

- **Unit Tests**: Testar lógica isolada
- **Integration Tests**: Testar integração entre camadas
- **E2E Tests**: Testar fluxos completos

### Executar Testes

```bash
# Todos os testes
npm run test

# Testes específicos
npm run test:unit
npm run test:integration
npm run test:e2e

# Cobertura
npm run test:coverage
```

## 📚 Documentação

### Arquivos de Documentação

- [`.cursorrules`](./.cursorrules) - Regras do projeto
- [`SCOPE.md`](./SCOPE.md) - Escopo detalhado
- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) - Status do projeto

### Design Patterns Utilizados

- ✅ **SOLID Principles**
- ✅ **Clean Architecture**
- ✅ **Domain Driven Design (DDD)**
- ✅ **Dependency Injection**
- ✅ **Repository Pattern**
- ✅ **Use Case Pattern**

## 🔄 Versionamento

### Conventional Commits

```bash
feat(auth): add user registration endpoint
fix(api): resolve CORS issue
docs(readme): update installation guide
style(ui): improve button styling
refactor(backend): extract email service
test(auth): add login flow tests
chore(deps): update dependencies
```

### Branches

- `main` - Código em produção
- `develop` - Código em desenvolvimento
- `feature/` - Novas funcionalidades
- `fix/` - Correções
- `hotfix/` - Correções urgentes

## 🤝 Contribuindo

### Padrões de Código

1. Seguir as regras do `.cursorrules`
2. Usar Conventional Commits
3. Implementar testes para novas funcionalidades
4. Documentar APIs e componentes
5. Manter arquitetura limpa

### Processo de Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📊 Status do Projeto

- **Versão**: 0.1.0
- **Status**: 🟡 Em Desenvolvimento
- **Última Atualização**: [Data]

### Progresso

- [ ] **Fase 1:** Configuração Inicial do Monorepo (0%)
- [ ] **Fase 2:** Backend NestJS - Sistema de Autenticação (0%)
- [ ] **Fase 3:** Frontend React - Interface de Autenticação (0%)
- [ ] **Fase 4:** Biblioteca Compartilhada (0%)
- [ ] **Fase 5:** Integração e Testes (0%)
- [ ] **Fase 6:** Documentação e Finalização (0%)
- [ ] **Fase 7:** Docker (Opcional) (0%)

## 🐛 Problemas Conhecidos

- [ ] [Lista de problemas conhecidos]

## 🚀 Roadmap

### Versão 1.0.0

- [x] Sistema de autenticação por código
- [x] Interface de usuário responsiva
- [x] API RESTful completa
- [x] Documentação básica

### Versão 1.1.0

- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Docker containerization
- [ ] Monitoramento e logs

### Versão 2.0.0

- [ ] Módulos adicionais
- [ ] Dashboard administrativo
- [ ] Relatórios e analytics
- [ ] Integração com serviços externos

## 📞 Suporte

- **Issues**: [GitHub Issues](link-para-issues)
- **Documentação**: [Wiki](link-para-wiki)
- **Email**: [seu-email@exemplo.com]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento**
