# Escopo do Projeto - Monorepo Nx (React + NestJS)

## 📊 Legenda de Complexidade

- **[Baixa]**: Tarefa simples, pode ser feita rapidamente
- **[Média]**: Tarefa moderada, requer atenção aos detalhes
- **[Alta]**: Tarefa complexa, pode ser dividida em subtarefas
- **[Crítica]**: Tarefa muito complexa, deve ser dividida obrigatoriamente

## **Fase 1: Configuração Inicial do Monorepo**

- [ ] 1.1 Inicializar workspace Nx **[Complexidade: Baixa]**
- [ ] 1.2 Configurar estrutura de pastas (apps/frontend, apps/backend, libs/shared) **[Complexidade: Baixa]**
- [ ] 1.3 Configurar dependências compartilhadas **[Complexidade: Média]**
  - [ ] 1.3.1 Instalar dependências base do Nx **[Complexidade: Baixa]**
  - [ ] 1.3.2 Configurar TypeScript compartilhado **[Complexidade: Baixa]**
  - [ ] 1.3.3 Configurar ESLint compartilhado **[Complexidade: Média]**
  - [ ] 1.3.4 Configurar Prettier compartilhado **[Complexidade: Baixa]**
- [ ] 1.4 Configurar scripts de desenvolvimento **[Complexidade: Média]**
  - [ ] 1.4.1 Configurar script de desenvolvimento simultâneo **[Complexidade: Média]**
  - [ ] 1.4.2 Configurar script de build **[Complexidade: Média]**
  - [ ] 1.4.3 Configurar script de testes **[Complexidade: Média]**
  - [ ] 1.4.4 Configurar script de linting **[Complexidade: Baixa]**
- [ ] 1.5 Configurar arquivos .env para dev/test/prod **[Complexidade: Baixa]**

## **Fase 2: Backend NestJS (Sistema de Autenticação por Código)**

### **2.1 Configuração Base**

- [ ] 2.1.1 Criar aplicação NestJS com TypeScript **[Complexidade: Baixa]**
- [ ] 2.1.2 Configurar TypeORM com MongoDB **[Complexidade: Média]**
  - [ ] 2.1.2.1 Instalar dependências do TypeORM **[Complexidade: Baixa]**
  - [ ] 2.1.2.2 Configurar conexão com MongoDB **[Complexidade: Média]**
  - [ ] 2.1.2.3 Configurar migrations **[Complexidade: Média]**
  - [ ] 2.1.2.4 Configurar seeds **[Complexidade: Baixa]**
- [ ] 2.1.3 Configurar nodemailer para envio de emails **[Complexidade: Média]**
  - [ ] 2.1.3.1 Instalar e configurar nodemailer **[Complexidade: Média]**
  - [ ] 2.1.3.2 Configurar templates de email **[Complexidade: Média]**
  - [ ] 2.1.3.3 Configurar variáveis de ambiente **[Complexidade: Baixa]**
  - [ ] 2.1.3.4 Implementar serviço de email **[Complexidade: Média]**
- [ ] 2.1.4 Configurar rate limiting **[Complexidade: Alta]**
  - [ ] 2.1.4.1 Instalar dependências de rate limiting **[Complexidade: Baixa]**
  - [ ] 2.1.4.2 Configurar Redis para rate limiting **[Complexidade: Média]**
  - [ ] 2.1.4.3 Implementar lógica de contagem **[Complexidade: Média]**
  - [ ] 2.1.4.4 Configurar janela de tempo **[Complexidade: Baixa]**
  - [ ] 2.1.4.5 Implementar resposta de erro **[Complexidade: Baixa]**

### **2.2 Entidades e Domínio**

- [ ] 2.2.1 Criar entidade User (id, email, name, isActive, createdAt, updatedAt) **[Complexidade: Baixa]**
- [ ] 2.2.2 Criar entidade LoginCode (id, userId, code, expiresAt, attempts, isUsed) **[Complexidade: Média]**
  - [ ] 2.2.2.1 Definir estrutura da entidade **[Complexidade: Baixa]**
  - [ ] 2.2.2.2 Configurar relacionamentos **[Complexidade: Média]**
  - [ ] 2.2.2.3 Implementar índices **[Complexidade: Média]**
  - [ ] 2.2.2.4 Configurar validações **[Complexidade: Baixa]**
- [ ] 2.2.3 Criar interfaces de repositório (IUserRepository, ILoginCodeRepository) **[Complexidade: Baixa]**
- [ ] 2.2.4 Criar interfaces de serviço (IEmailService, ICodeGeneratorService) **[Complexidade: Baixa]**

### **2.3 Use Cases**

- [ ] 2.3.1 RegisterUserUseCase (cadastro com geração de código) **[Complexidade: Alta]**
  - [ ] 2.3.1.1 Validar dados de entrada **[Complexidade: Baixa]**
  - [ ] 2.3.1.2 Verificar se email já existe **[Complexidade: Baixa]**
  - [ ] 2.3.1.3 Criar usuário no banco **[Complexidade: Baixa]**
  - [ ] 2.3.1.4 Gerar código único **[Complexidade: Média]**
  - [ ] 2.3.1.5 Salvar código no banco **[Complexidade: Baixa]**
  - [ ] 2.3.1.6 Enviar email com código **[Complexidade: Média]**
  - [ ] 2.3.1.7 Retornar resposta de sucesso **[Complexidade: Baixa]**

- [ ] 2.3.2 RequestLoginCodeUseCase (solicitar código de login) **[Complexidade: Alta]**
  - [ ] 2.3.2.1 Validar email **[Complexidade: Baixa]**
  - [ ] 2.3.2.2 Verificar se usuário existe **[Complexidade: Baixa]**
  - [ ] 2.3.2.3 Verificar rate limiting **[Complexidade: Média]**
  - [ ] 2.3.2.4 Gerar novo código único **[Complexidade: Média]**
  - [ ] 2.3.2.5 Invalidar códigos anteriores **[Complexidade: Baixa]**
  - [ ] 2.3.2.6 Salvar novo código **[Complexidade: Baixa]**
  - [ ] 2.3.2.7 Enviar email **[Complexidade: Média]**

- [ ] 2.3.3 VerifyLoginCodeUseCase (verificar código e logar) **[Complexidade: Alta]**
  - [ ] 2.3.3.1 Validar email e código **[Complexidade: Baixa]**
  - [ ] 2.3.3.2 Buscar código no banco **[Complexidade: Baixa]**
  - [ ] 2.3.3.3 Verificar se código expirou **[Complexidade: Baixa]**
  - [ ] 2.3.3.4 Verificar tentativas restantes **[Complexidade: Baixa]**
  - [ ] 2.3.3.5 Validar código **[Complexidade: Baixa]**
  - [ ] 2.3.3.6 Marcar código como usado **[Complexidade: Baixa]**
  - [ ] 2.3.3.7 Gerar JWT token **[Complexidade: Média]**
  - [ ] 2.3.3.8 Retornar dados do usuário **[Complexidade: Baixa]**

- [ ] 2.3.4 GetCurrentUserUseCase (dados do usuário logado) **[Complexidade: Baixa]**
- [ ] 2.3.5 LogoutUserUseCase (logout) **[Complexidade: Baixa]**

### **2.4 DTOs e Validações**

- [ ] 2.4.1 CreateUserDto (name, email) **[Complexidade: Baixa]**
- [ ] 2.4.2 LoginDto (email) **[Complexidade: Baixa]**
- [ ] 2.4.3 VerifyCodeDto (email, code) **[Complexidade: Baixa]**
- [ ] 2.4.4 ResponseDto (padrão de resposta) **[Complexidade: Baixa]**

### **2.5 Controllers**

- [ ] 2.5.1 AuthController com endpoints **[Complexidade: Média]**
  - [ ] 2.5.1.1 Configurar decorators de rota **[Complexidade: Baixa]**
  - [ ] 2.5.1.2 Implementar validação de entrada **[Complexidade: Média]**
  - [ ] 2.5.1.3 Configurar tratamento de erros **[Complexidade: Média]**
  - [ ] 2.5.1.4 Implementar endpoints **[Complexidade: Média]**
  - [ ] POST /auth/register **[Complexidade: Baixa]**
  - [ ] POST /auth/login **[Complexidade: Baixa]**
  - [ ] POST /auth/verify-code **[Complexidade: Baixa]**
  - [ ] GET /auth/me **[Complexidade: Baixa]**
  - [ ] POST /auth/logout **[Complexidade: Baixa]**

### **2.6 Middlewares e Segurança**

- [ ] 2.6.1 Rate limiting middleware **[Complexidade: Alta]**
  - [ ] 2.6.1.1 Configurar Redis para rate limiting **[Complexidade: Média]**
  - [ ] 2.6.1.2 Implementar lógica de contagem **[Complexidade: Média]**
  - [ ] 2.6.1.3 Configurar janela de tempo **[Complexidade: Baixa]**
  - [ ] 2.6.1.4 Implementar resposta de erro **[Complexidade: Baixa]**

- [ ] 2.6.2 Authentication middleware **[Complexidade: Média]**
  - [ ] 2.6.2.1 Configurar JWT strategy **[Complexidade: Média]**
  - [ ] 2.6.2.2 Implementar verificação de token **[Complexidade: Média]**
  - [ ] 2.6.2.3 Configurar guards **[Complexidade: Média]**
  - [ ] 2.6.2.4 Implementar refresh token **[Complexidade: Média]**

- [ ] 2.6.3 CORS configuration **[Complexidade: Baixa]**
- [ ] 2.6.4 Logging middleware **[Complexidade: Média]**
  - [ ] 2.6.4.1 Configurar Winston logger **[Complexidade: Média]**
  - [ ] 2.6.4.2 Implementar logs de requisição **[Complexidade: Média]**
  - [ ] 2.6.4.3 Implementar logs de erro **[Complexidade: Média]**
  - [ ] 2.6.4.4 Configurar rotação de logs **[Complexidade: Média]**

## **Fase 3: Frontend React (Interface de Autenticação)**

### **3.1 Configuração Base**

- [ ] 3.1.1 Criar aplicação React com Vite + TypeScript **[Complexidade: Baixa]**
- [ ] 3.1.2 Configurar Material-UI **[Complexidade: Média]**
  - [ ] 3.1.2.1 Instalar dependências do Material-UI **[Complexidade: Baixa]**
  - [ ] 3.1.2.2 Configurar tema personalizado **[Complexidade: Média]**
  - [ ] 3.1.2.3 Configurar provider de tema **[Complexidade: Média]**
  - [ ] 3.1.2.4 Configurar breakpoints responsivos **[Complexidade: Média]**
- [ ] 3.1.3 Configurar React Router **[Complexidade: Baixa]**
- [ ] 3.1.4 Configurar Axios para requisições HTTP **[Complexidade: Média]**
  - [ ] 3.1.4.1 Instalar e configurar Axios **[Complexidade: Baixa]**
  - [ ] 3.1.4.2 Configurar base URL **[Complexidade: Baixa]**
  - [ ] 3.1.4.3 Configurar interceptors **[Complexidade: Média]**
  - [ ] 3.1.4.4 Configurar timeout **[Complexidade: Baixa]**

### **3.2 Contexto de Autenticação**

- [ ] 3.2.1 Criar AuthContext **[Complexidade: Média]**
  - [ ] 3.2.1.1 Definir interface do contexto **[Complexidade: Baixa]**
  - [ ] 3.2.1.2 Implementar estado inicial **[Complexidade: Baixa]**
  - [ ] 3.2.1.3 Configurar tipos TypeScript **[Complexidade: Média]**
- [ ] 3.2.2 Implementar AuthProvider **[Complexidade: Alta]**
  - [ ] 3.2.2.1 Configurar estado de autenticação **[Complexidade: Baixa]**
  - [ ] 3.2.2.2 Implementar métodos de login/logout **[Complexidade: Média]**
  - [ ] 3.2.2.3 Configurar persistência de token **[Complexidade: Média]**
  - [ ] 3.2.2.4 Implementar refresh automático **[Complexidade: Alta]**
  - [ ] 3.2.2.5 Configurar localStorage/sessionStorage **[Complexidade: Média]**
  - [ ] 3.2.2.6 Implementar verificação de token expirado **[Complexidade: Média]**

- [ ] 3.2.3 Criar hooks de autenticação (useAuth, useLogin, useRegister) **[Complexidade: Média]**
  - [ ] 3.2.3.1 Implementar useAuth hook **[Complexidade: Média]**
  - [ ] 3.2.3.2 Implementar useLogin hook **[Complexidade: Média]**
  - [ ] 3.2.3.3 Implementar useRegister hook **[Complexidade: Média]**
  - [ ] 3.2.3.4 Implementar useLogout hook **[Complexidade: Baixa]**

### **3.3 Páginas de Autenticação**

- [ ] 3.3.1 Página de Registro (RegisterPage) **[Complexidade: Alta]**
  - [ ] Formulário com nome e email **[Complexidade: Média]**
  - [ ] Validação de campos **[Complexidade: Média]**
  - [ ] Feedback de sucesso/erro **[Complexidade: Média]**
  - [ ] Integração com API **[Complexidade: Média]**
  - [ ] 3.3.1.1 Criar componente de formulário **[Complexidade: Média]**
  - [ ] 3.3.1.2 Implementar validação em tempo real **[Complexidade: Média]**
  - [ ] 3.3.1.3 Configurar estados de loading **[Complexidade: Baixa]**
  - [ ] 3.3.1.4 Implementar redirecionamento após sucesso **[Complexidade: Média]**

- [ ] 3.3.2 Página de Login (LoginPage) **[Complexidade: Média]**
  - [ ] Formulário apenas com email **[Complexidade: Baixa]**
  - [ ] Validação de email **[Complexidade: Baixa]**
  - [ ] Feedback de solicitação de código **[Complexidade: Média]**
  - [ ] 3.3.2.1 Criar componente de formulário **[Complexidade: Baixa]**
  - [ ] 3.3.2.2 Implementar validação de email **[Complexidade: Baixa]**
  - [ ] 3.3.2.3 Configurar feedback visual **[Complexidade: Média]**
  - [ ] 3.3.2.4 Implementar redirecionamento **[Complexidade: Média]**

- [ ] 3.3.3 Página de Verificação de Código (VerifyCodePage) **[Complexidade: Alta]**
  - [ ] Campo para digitar código **[Complexidade: Média]**
  - [ ] Timer de expiração **[Complexidade: Alta]**
  - [ ] Opção de reenviar código **[Complexidade: Média]**
  - [ ] Validação em tempo real **[Complexidade: Média]**
  - [ ] 3.3.3.1 Criar campo de código com máscara **[Complexidade: Média]**
  - [ ] 3.3.3.2 Implementar timer countdown **[Complexidade: Alta]**
  - [ ] 3.3.3.3 Configurar reenvio de código **[Complexidade: Média]**
  - [ ] 3.3.3.4 Implementar validação automática **[Complexidade: Média]**
  - [ ] 3.3.3.5 Configurar feedback de sucesso/erro **[Complexidade: Média]**

- [ ] 3.3.4 Dashboard (DashboardPage) **[Complexidade: Média]**
  - [ ] Área logada **[Complexidade: Baixa]**
  - [ ] Informações do usuário **[Complexidade: Baixa]**
  - [ ] Botão de logout **[Complexidade: Baixa]**
  - [ ] 3.3.4.1 Criar layout do dashboard **[Complexidade: Média]**
  - [ ] 3.3.4.2 Implementar carregamento de dados do usuário **[Complexidade: Média]**
  - [ ] 3.3.4.3 Configurar navegação **[Complexidade: Baixa]**
  - [ ] 3.3.4.4 Implementar logout **[Complexidade: Baixa]**

### **3.4 Componentes Reutilizáveis**

- [ ] 3.4.1 FormField (campo de formulário) **[Complexidade: Média]**
  - [ ] 3.4.1.1 Criar componente base **[Complexidade: Média]**
  - [ ] 3.4.1.2 Implementar validação **[Complexidade: Média]**
  - [ ] 3.4.1.3 Configurar tipos de input **[Complexidade: Média]**
  - [ ] 3.4.1.4 Implementar feedback visual **[Complexidade: Média]**
- [ ] 3.4.2 Button (botão customizado) **[Complexidade: Baixa]**
- [ ] 3.4.3 LoadingSpinner (indicador de carregamento) **[Complexidade: Baixa]**
- [ ] 3.4.4 Alert (mensagens de feedback) **[Complexidade: Média]**
  - [ ] 3.4.4.1 Criar componente de alerta **[Complexidade: Média]**
  - [ ] 3.4.4.2 Implementar tipos de alerta (success, error, warning) **[Complexidade: Média]**
  - [ ] 3.4.4.3 Configurar auto-dismiss **[Complexidade: Média]**
  - [ ] 3.4.4.4 Implementar animações **[Complexidade: Média]**
- [ ] 3.4.5 Layout (layout responsivo) **[Complexidade: Alta]**
  - [ ] 3.4.5.1 Criar layout base **[Complexidade: Média]**
  - [ ] 3.4.5.2 Implementar responsividade **[Complexidade: Alta]**
  - [ ] 3.4.5.3 Configurar breakpoints **[Complexidade: Média]**
  - [ ] 3.4.5.4 Implementar navegação mobile **[Complexidade: Alta]**

### **3.5 Serviços e API**

- [ ] 3.5.1 AuthService (comunicação com backend) **[Complexidade: Alta]**
  - [ ] 3.5.1.1 Configurar métodos de autenticação **[Complexidade: Média]**
  - [ ] 3.5.1.2 Implementar tratamento de erros **[Complexidade: Média]**
  - [ ] 3.5.1.3 Configurar interceptors **[Complexidade: Média]**
  - [ ] 3.5.1.4 Implementar refresh token **[Complexidade: Média]**
  - [ ] 3.5.1.5 Configurar retry logic **[Complexidade: Média]**
  - [ ] 3.5.1.6 Implementar cache de requisições **[Complexidade: Média]**

- [ ] 3.5.2 ApiService (configuração base do Axios) **[Complexidade: Média]**
  - [ ] 3.5.2.1 Configurar instância base **[Complexidade: Média]**
  - [ ] 3.5.2.2 Implementar interceptors **[Complexidade: Média]**
  - [ ] 3.5.2.3 Configurar timeout **[Complexidade: Baixa]**
  - [ ] 3.5.2.4 Implementar retry logic **[Complexidade: Média]**

- [ ] 3.5.3 Interceptors para tratamento de erros **[Complexidade: Alta]**
  - [ ] 3.5.3.1 Implementar interceptor de requisição **[Complexidade: Média]**
  - [ ] 3.5.3.2 Implementar interceptor de resposta **[Complexidade: Média]**
  - [ ] 3.5.3.3 Configurar tratamento de erros HTTP **[Complexidade: Alta]**
  - [ ] 3.5.3.4 Implementar retry automático **[Complexidade: Média]**
  - [ ] 3.5.3.5 Configurar notificações de erro **[Complexidade: Média]**

## **Fase 4: Biblioteca Compartilhada**

- [ ] 4.1 Criar lib shared com: **[Complexidade: Média]**
  - [ ] Tipos TypeScript compartilhados (User, LoginCode, etc.) **[Complexidade: Baixa]**
  - [ ] Interfaces de API **[Complexidade: Baixa]**
  - [ ] Utilitários de validação **[Complexidade: Média]**
  - [ ] Constantes do projeto **[Complexidade: Baixa]**
  - [ ] 4.1.1 Configurar estrutura da biblioteca **[Complexidade: Média]**
  - [ ] 4.1.2 Implementar tipos compartilhados **[Complexidade: Baixa]**
  - [ ] 4.1.3 Criar utilitários de validação **[Complexidade: Média]**
  - [ ] 4.1.4 Configurar constantes **[Complexidade: Baixa]**
- [ ] 4.2 Configurar build da biblioteca compartilhada **[Complexidade: Média]**
  - [ ] 4.2.1 Configurar TypeScript para build **[Complexidade: Média]**
  - [ ] 4.2.2 Configurar bundler **[Complexidade: Média]**
  - [ ] 4.2.3 Configurar exports **[Complexidade: Média]**
  - [ ] 4.2.4 Configurar testes da biblioteca **[Complexidade: Média]**

## **Fase 5: Integração e Testes**

- [ ] 5.1 Testar fluxo completo de cadastro **[Complexidade: Alta]**
  - [ ] 5.1.1 Testar formulário de registro **[Complexidade: Média]**
  - [ ] 5.1.2 Testar envio de email **[Complexidade: Média]**
  - [ ] 5.1.3 Testar verificação de código **[Complexidade: Média]**
  - [ ] 5.1.4 Testar ativação de conta **[Complexidade: Média]**
  - [ ] 5.1.5 Testar login automático **[Complexidade: Média]**
- [ ] 5.2 Testar fluxo completo de login **[Complexidade: Alta]**
  - [ ] 5.2.1 Testar solicitação de código **[Complexidade: Média]**
  - [ ] 5.2.2 Testar verificação de código **[Complexidade: Média]**
  - [ ] 5.2.3 Testar geração de token **[Complexidade: Média]**
  - [ ] 5.2.4 Testar redirecionamento **[Complexidade: Média]**
- [ ] 5.3 Testar rate limiting **[Complexidade: Média]**
  - [ ] 5.3.1 Testar limite de tentativas **[Complexidade: Média]**
  - [ ] 5.3.2 Testar janela de tempo **[Complexidade: Média]**
  - [ ] 5.3.3 Testar reset de contadores **[Complexidade: Média]**
- [ ] 5.4 Testar expiração de códigos **[Complexidade: Média]**
  - [ ] 5.4.1 Testar expiração automática **[Complexidade: Média]**
  - [ ] 5.4.2 Testar limpeza de códigos expirados **[Complexidade: Média]**
- [ ] 5.5 Implementar testes unitários básicos **[Complexidade: Alta]**
  - [ ] 5.5.1 Configurar Jest para backend **[Complexidade: Média]**
  - [ ] 5.5.2 Configurar Jest para frontend **[Complexidade: Média]**
  - [ ] 5.5.3 Implementar testes de use cases **[Complexidade: Alta]**
  - [ ] 5.5.4 Implementar testes de componentes **[Complexidade: Alta]**
  - [ ] 5.5.5 Implementar testes de serviços **[Complexidade: Média]**
- [ ] 5.6 Testar responsividade **[Complexidade: Média]**
  - [ ] 5.6.1 Testar em diferentes resoluções **[Complexidade: Média]**
  - [ ] 5.6.2 Testar em dispositivos móveis **[Complexidade: Média]**
  - [ ] 5.6.3 Testar navegação touch **[Complexidade: Média]**

## **Fase 6: Documentação e Finalização**

- [ ] 6.1 Criar README com instruções de setup **[Complexidade: Baixa]**
- [ ] 6.2 Documentar APIs **[Complexidade: Média]**
  - [ ] 6.2.1 Configurar Swagger/OpenAPI **[Complexidade: Média]**
  - [ ] 6.2.2 Documentar endpoints **[Complexidade: Média]**
  - [ ] 6.2.3 Criar exemplos de uso **[Complexidade: Média]**
- [ ] 6.3 Configurar scripts de build para produção **[Complexidade: Média]**
  - [ ] 6.3.1 Configurar build do frontend **[Complexidade: Média]**
  - [ ] 6.3.2 Configurar build do backend **[Complexidade: Média]**
  - [ ] 6.3.3 Configurar otimizações **[Complexidade: Média]**
- [ ] 6.4 Preparar estrutura para CI/CD (scripts básicos) **[Complexidade: Alta]**
  - [ ] 6.4.1 Configurar GitHub Actions **[Complexidade: Alta]**
  - [ ] 6.4.2 Implementar testes automatizados **[Complexidade: Média]**
  - [ ] 6.4.3 Configurar deploy automático **[Complexidade: Alta]**
  - [ ] 6.4.4 Implementar notificações **[Complexidade: Média]**

## **Fase 7: Docker (Opcional - Final)**

- [ ] 7.1 Criar Dockerfile para frontend **[Complexidade: Média]**
  - [ ] 7.1.1 Configurar build multi-stage **[Complexidade: Média]**
  - [ ] 7.1.2 Otimizar tamanho da imagem **[Complexidade: Média]**
  - [ ] 7.1.3 Configurar nginx **[Complexidade: Média]**
- [ ] 7.2 Criar Dockerfile para backend **[Complexidade: Média]**
  - [ ] 7.2.1 Configurar build multi-stage **[Complexidade: Média]**
  - [ ] 7.2.2 Configurar Node.js runtime **[Complexidade: Média]**
  - [ ] 7.2.3 Otimizar dependências **[Complexidade: Média]**
- [ ] 7.3 Criar docker-compose.yml **[Complexidade: Alta]**
  - [ ] 7.3.1 Configurar serviços **[Complexidade: Média]**
  - [ ] 7.3.2 Configurar redes **[Complexidade: Média]**
  - [ ] 7.3.3 Configurar volumes **[Complexidade: Média]**
  - [ ] 7.3.4 Configurar variáveis de ambiente **[Complexidade: Média]**
- [ ] 7.4 Configurar volumes para desenvolvimento **[Complexidade: Média]**
  - [ ] 7.4.1 Configurar hot reload **[Complexidade: Média]**
  - [ ] 7.4.2 Configurar logs **[Complexidade: Média]**
  - [ ] 7.4.3 Configurar debugging **[Complexidade: Média]**

---

## **Estrutura de Pastas Proposta:**

```
exemplo/
├── apps/
│   ├── frontend/          # React + Vite + Material-UI
│   └── backend/           # NestJS + TypeORM + MongoDB
├── libs/
│   └── shared/            # Tipos e utilitários compartilhados
├── tools/                 # Scripts e configurações
├── .env.example
├── nx.json
├── package.json
├── .cursorrules           # Regras do projeto
├── SCOPE.md              # Este arquivo
└── README.md
```

## **Fluxo de Autenticação Implementado:**

### **Cadastro:**

1. Usuário preenche nome e email
2. Sistema gera código único de 6 dígitos
3. Sistema envia código por email
4. Usuário digita código na tela de verificação
5. Sistema valida código e ativa conta
6. Usuário é logado automaticamente

### **Login:**

1. Usuário digita email na tela de login
2. Sistema gera novo código único
3. Sistema envia código por email
4. Usuário digita código na tela de verificação
5. Sistema valida código e loga usuário
6. Usuário é direcionado para dashboard

### **Segurança:**

- Códigos expiram em 10 minutos
- Máximo 3 tentativas por código
- Rate limiting: 3 tentativas por email por hora
- Logs de todas as tentativas de login

## **📊 Resumo de Complexidade por Fase:**

- **Fase 1**: 3 Baixa, 2 Média
- **Fase 2**: 8 Baixa, 8 Média, 6 Alta
- **Fase 3**: 4 Baixa, 8 Média, 5 Alta
- **Fase 4**: 3 Baixa, 2 Média
- **Fase 5**: 1 Média, 5 Alta
- **Fase 6**: 1 Baixa, 2 Média, 1 Alta
- **Fase 7**: 1 Média, 2 Alta

**Tempo estimado:** 2-3 semanas para implementação completa
