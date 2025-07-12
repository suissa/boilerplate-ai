# 🚀 Setup do Projeto - Monorepo Nx (React + NestJS)

## 📋 Pré-requisitos

### Software Necessário

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **MongoDB** ([Download](https://www.mongodb.com/try/download/community))
- **Redis** (Opcional - para rate limiting avançado)

### Verificação de Instalação

```bash
# Verificar Node.js
node --version  # Deve ser 18+

# Verificar npm
npm --version

# Verificar Git
git --version

# Verificar MongoDB
mongod --version
```

## 🔧 Configuração Inicial

### 1. Clone do Repositório

```bash
# Clone o repositório
git clone https://github.com/rastamansp/boilerplate-ai.git
cd boilerplate-ai

# Verificar status
git status
```

### 2. Configuração de Ambiente

```bash
# Copiar arquivo de exemplo
cp env.example .env

# Editar configurações
# (Ver seção "Configurações de Ambiente" abaixo)
```

### 3. Instalação de Dependências

```bash
# Instalar dependências base
npm install

# Verificar instalação
npm list
```

## 🔐 Configurações de Ambiente

### MongoDB

```env
MONGODB_URI=mongodb://gwan:pazdeDeus2025@localhost:27017/auth-app?authSource=admin
MONGODB_DATABASE=auth-app
MONGODB_HOST=localhost
MONGODB_PORT=27017
MONGODB_USERNAME=gwan
MONGODB_PASSWORD=pazdeDeus2025
MONGODB_AUTH_SOURCE=admin
```

### Email (Obrigatório)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

**Configuração Gmail:**

1. Ative verificação em 2 etapas
2. Gere senha de app
3. Use a senha no `SMTP_PASS`

### JWT Secrets (Obrigatório)

```bash
# Gerar JWT Secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Gerar Refresh Secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Substitua no `.env`:

```env
JWT_SECRET=seu-jwt-secret-gerado
JWT_REFRESH_SECRET=seu-refresh-secret-gerado
```

## 🚀 Scripts de Desenvolvimento

### Comandos Principais

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
npm run lint:fix     # Corrige problemas
```

### Comandos Nx

```bash
# Listar projetos
npx nx show projects

# Executar projeto específico
npx nx serve frontend
npx nx serve backend

# Build de projeto específico
npx nx build frontend
npx nx build backend

# Testes de projeto específico
npx nx test frontend
npx nx test backend
```

## 🧪 Testes de Configuração

### Teste de Conexão MongoDB

```bash
# Testar conexão
npm run test:db

# Verificar se MongoDB está rodando
mongosh --eval "db.runCommand('ping')"
```

### Teste de Email

```bash
# Testar envio de email
npm run test:email

# Verificar configurações SMTP
npm run test:smtp
```

### Teste de Rate Limiting

```bash
# Testar rate limiting
npm run test:rate-limit

# Verificar Redis (se configurado)
redis-cli ping
```

## 🔧 Configuração de Ferramentas

### VS Code Extensions

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json"
  ]
}
```

### Configurações do Editor

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 🐛 Troubleshooting

### Problemas Comuns

#### MongoDB não conecta

```bash
# Verificar se MongoDB está rodando
sudo systemctl status mongod

# Reiniciar MongoDB
sudo systemctl restart mongod

# Verificar logs
sudo journalctl -u mongod
```

#### Email não envia

```bash
# Verificar configurações SMTP
npm run test:smtp

# Verificar se Gmail está configurado corretamente
# - Verificação em 2 etapas ativada
# - Senha de app gerada
# - SMTP habilitado
```

#### Porta já em uso

```bash
# Verificar portas em uso
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Matar processo na porta
sudo kill -9 $(lsof -t -i:3000)
sudo kill -9 $(lsof -t -i:3001)
```

#### Dependências não instalam

```bash
# Limpar cache
npm cache clean --force

# Remover node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

## 📊 Monitoramento

### Logs da Aplicação

```bash
# Ver logs do backend
npm run logs:backend

# Ver logs do frontend
npm run logs:frontend

# Ver logs completos
npm run logs
```

### Métricas de Performance

```bash
# Verificar uso de memória
npm run monitor:memory

# Verificar uso de CPU
npm run monitor:cpu

# Verificar conexões de banco
npm run monitor:db
```

## 🔄 Atualizações

### Atualizar Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências
npm update

# Atualizar dependências de desenvolvimento
npm update --save-dev
```

### Atualizar Nx

```bash
# Atualizar Nx
npm install -g @nrwl/cli@latest

# Atualizar workspace
npx nx migrate latest
```

## 📝 Documentação

### Arquivos Importantes

- **README.md** - Documentação principal
- **SCOPE.md** - Escopo do projeto
- **PROJECT_STATUS.md** - Status atual
- **.cursorrules** - Regras do projeto
- **ENV_SETUP.md** - Configuração de ambiente

### Links Úteis

- [Nx Documentation](https://nx.dev/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)

## ⚠️ Importante

1. **Nunca commite o arquivo `.env`**
2. **Sempre use `env.example` como template**
3. **Gere secrets únicos para cada ambiente**
4. **Configure email real para funcionamento completo**
5. **Teste todas as conexões antes de prosseguir**

## 🆘 Suporte

### Problemas Técnicos

- Verificar logs da aplicação
- Consultar documentação oficial
- Verificar configurações de ambiente
- Testar conexões individualmente

### Contato

- **Issues:** [GitHub Issues](https://github.com/rastamansp/boilerplate-ai/issues)
- **Documentação:** [Wiki](https://github.com/rastamansp/boilerplate-ai/wiki)

---

**Última atualização:** [Data atual]
**Versão:** 1.0.0
