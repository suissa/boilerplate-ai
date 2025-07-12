import { config } from 'dotenv';
import { join } from 'path';

// Carregar variáveis de ambiente baseado no NODE_ENV
const envFile =
  process.env.NODE_ENV === 'production'
    ? 'env.production'
    : process.env.NODE_ENV === 'test'
      ? 'env.test'
      : 'env.development';

config({ path: join(process.cwd(), envFile) });

export interface EnvironmentConfig {
  // Servidor
  NODE_ENV: string;
  PORT: number;
  HOST: string;
  CORS_ORIGIN: string;

  // MongoDB
  MONGODB_URI: string;
  MONGODB_DATABASE: string;
  MONGODB_HOST: string;
  MONGODB_PORT: number;
  MONGODB_USERNAME: string;
  MONGODB_PASSWORD: string;
  MONGODB_AUTH_SOURCE: string;

  // Email
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_FROM: string;

  // JWT
  JWT_SECRET: string;
  JWT_REFRESH_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_REFRESH_EXPIRES_IN: string;

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  RATE_LIMIT_SKIP_SUCCESSFUL_REQUESTS: boolean;

  // Login Codes
  LOGIN_CODE_LENGTH: number;
  LOGIN_CODE_EXPIRES_MINUTES: number;
  LOGIN_CODE_MAX_ATTEMPTS: number;

  // Logs
  LOG_LEVEL: string;
  LOG_FORMAT: string;

  // Redis
  REDIS_URL: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD: string;

  // Frontend
  FRONTEND_URL: string;
  FRONTEND_PORT: number;

  // Backend
  BACKEND_URL: string;
  BACKEND_PORT: number;

  // Features
  DEBUG: boolean;
  ENABLE_SWAGGER: boolean;
  ENABLE_CORS: boolean;
  ENABLE_RATE_LIMITING: boolean;
  ENABLE_COMPRESSION?: boolean;
  ENABLE_HELMET?: boolean;
  TEST_TIMEOUT?: number | undefined;
}

export const env: EnvironmentConfig = {
  // Servidor
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3001', 10),
  HOST: process.env.HOST || 'localhost',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',

  // MongoDB
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-app',
  MONGODB_DATABASE: process.env.MONGODB_DATABASE || 'auth-app',
  MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
  MONGODB_PORT: parseInt(process.env.MONGODB_PORT || '27017', 10),
  MONGODB_USERNAME: process.env.MONGODB_USERNAME || 'gwan',
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'pazdeDeus2025',
  MONGODB_AUTH_SOURCE: process.env.MONGODB_AUTH_SOURCE || 'admin',

  // Email
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10),
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  SMTP_FROM: process.env.SMTP_FROM || 'noreply@example.com',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'default-secret-change-in-production',
  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET ||
    'default-refresh-secret-change-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '15m',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(
    process.env.RATE_LIMIT_WINDOW_MS || '3600000',
    10
  ),
  RATE_LIMIT_MAX_REQUESTS: parseInt(
    process.env.RATE_LIMIT_MAX_REQUESTS || '100',
    10
  ),
  RATE_LIMIT_SKIP_SUCCESSFUL_REQUESTS:
    process.env.RATE_LIMIT_SKIP_SUCCESSFUL_REQUESTS === 'true',

  // Login Codes
  LOGIN_CODE_LENGTH: parseInt(process.env.LOGIN_CODE_LENGTH || '6', 10),
  LOGIN_CODE_EXPIRES_MINUTES: parseInt(
    process.env.LOGIN_CODE_EXPIRES_MINUTES || '10',
    10
  ),
  LOGIN_CODE_MAX_ATTEMPTS: parseInt(
    process.env.LOGIN_CODE_MAX_ATTEMPTS || '3',
    10
  ),

  // Logs
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: process.env.LOG_FORMAT || 'combined',

  // Redis
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379', 10),
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || '',

  // Frontend
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  FRONTEND_PORT: parseInt(process.env.FRONTEND_PORT || '3000', 10),

  // Backend
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3001',
  BACKEND_PORT: parseInt(process.env.BACKEND_PORT || '3001', 10),

  // Features
  DEBUG: process.env.DEBUG === 'true',
  ENABLE_SWAGGER: process.env.ENABLE_SWAGGER === 'true',
  ENABLE_CORS: process.env.ENABLE_CORS !== 'false',
  ENABLE_RATE_LIMITING: process.env.ENABLE_RATE_LIMITING !== 'false',
  ENABLE_COMPRESSION: process.env.ENABLE_COMPRESSION === 'true',
  ENABLE_HELMET: process.env.ENABLE_HELMET === 'true',
  TEST_TIMEOUT: process.env.TEST_TIMEOUT
    ? parseInt(process.env.TEST_TIMEOUT, 10)
    : undefined,
};

// Validação de configurações obrigatórias
export const validateConfig = (): void => {
  const requiredFields: (keyof EnvironmentConfig)[] = [
    'JWT_SECRET',
    'JWT_REFRESH_SECRET',
    'SMTP_USER',
    'SMTP_PASS',
  ];

  const missingFields = requiredFields.filter(field => !env[field]);

  if (missingFields.length > 0) {
    throw new Error(
      `Configurações obrigatórias não encontradas: ${missingFields.join(', ')}`
    );
  }
};

// Função para obter configuração por ambiente
export const getConfig = (): EnvironmentConfig => {
  validateConfig();
  return env;
};
