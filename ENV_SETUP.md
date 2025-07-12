# 🔧 Configuração de Variáveis de Ambiente

## 📋 Instruções de Setup

### 1. Criar arquivo .env

```bash
# Copie o arquivo de exemplo
cp env.example .env
```

### 2. Configurar MongoDB

As configurações do MongoDB já estão definidas no arquivo `env.example`:

```env
MONGODB_URI=mongodb://gwan:pazdeDeus2025@localhost:27017/auth-app?authSource=admin
MONGODB_DATABASE=auth-app
MONGODB_HOST=localhost
MONGODB_PORT=27017
MONGODB_USERNAME=gwan
MONGODB_PASSWORD=pazdeDeus2025
MONGODB_AUTH_SOURCE=admin
```

### 3. Configurar Email (Obrigatório)

Edite o arquivo `.env` e configure suas credenciais de email:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

**Para Gmail:**

- Ative a verificação em 2 etapas
- Gere uma senha de app
- Use essa senha no `SMTP_PASS`

### 4. Configurar JWT Secrets (Obrigatório)

Gere secrets seguros para JWT:

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

### 5. Configurar Redis (Opcional)

Para rate limiting mais eficiente, configure Redis:

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
```

## 🔐 Variáveis de Segurança

### Variáveis Obrigatórias

- `MONGODB_URI` - Conexão com MongoDB
- `SMTP_USER` - Email para envio
- `SMTP_PASS` - Senha do email
- `JWT_SECRET` - Secret para JWT
- `JWT_REFRESH_SECRET` - Secret para refresh token

### Variáveis Opcionais

- `REDIS_HOST` - Para rate limiting avançado
- `DEBUG` - Para logs detalhados
- `ENABLE_SWAGGER` - Para documentação da API

## 🚀 Configurações por Ambiente

### Development

```env
NODE_ENV=development
DEBUG=true
SHOW_QUERIES=true
ENABLE_SWAGGER=true
```

### Production

```env
NODE_ENV=production
DEBUG=false
SHOW_QUERIES=false
ENABLE_SWAGGER=false
```

## 📊 Configurações de Rate Limiting

```env
RATE_LIMIT_WINDOW=3600000      # 1 hora em ms
RATE_LIMIT_MAX_REQUESTS=3      # 3 tentativas por hora
RATE_LIMIT_BLOCK_DURATION=3600000  # Bloqueio por 1 hora
```

## 🔑 Configurações de Código de Login

```env
LOGIN_CODE_LENGTH=6            # 6 dígitos
LOGIN_CODE_EXPIRES_IN=600000   # 10 minutos
LOGIN_CODE_MAX_ATTEMPTS=3      # 3 tentativas por código
```

## ⚠️ Importante

1. **Nunca commite o arquivo `.env`** no repositório
2. **Sempre use o `env.example`** como template
3. **Gere secrets únicos** para cada ambiente
4. **Configure email real** para funcionamento completo
5. **Teste a conexão** com MongoDB antes de prosseguir

## 🧪 Teste de Configuração

Após configurar, teste a conexão:

```bash
# Testar conexão MongoDB
npm run test:db

# Testar envio de email
npm run test:email

# Testar rate limiting
npm run test:rate-limit
```
