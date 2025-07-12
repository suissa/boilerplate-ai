#!/usr/bin/env node

const { execSync } = require('child_process');
const { version } = require('semver');

// Versões mínimas requeridas
const REQUIRED_VERSIONS = {
  node: '20.17.0',
  npm: '10.0.0',
  git: '2.40.0',
  mongodb: '7.0.0',
  redis: '7.0.0',
};

// Função para verificar versão
function checkVersion(command, versionKey, displayName) {
  try {
    const output = execSync(command, { encoding: 'utf8', shell: true });
    const currentVersion = output.trim();

    if (versionKey === 'node') {
      // Node.js retorna "v20.12.2" - remover o "v"
      const cleanVersion = currentVersion.replace('v', '');
      if (version.gte(cleanVersion, REQUIRED_VERSIONS[versionKey])) {
        console.log(
          `✅ ${displayName}: ${currentVersion} (>= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return true;
      } else {
        console.log(
          `❌ ${displayName}: ${currentVersion} (requer >= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return false;
      }
    } else if (versionKey === 'mongodb') {
      // MongoDB retorna "db version v7.0.5" - extrair versão
      const match = currentVersion.match(/db version v(\d+\.\d+\.\d+)/);
      if (match && version.gte(match[1], REQUIRED_VERSIONS[versionKey])) {
        console.log(
          `✅ ${displayName}: ${match[0]} (>= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return true;
      } else {
        console.log(
          `❌ ${displayName}: ${currentVersion} (requer >= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return false;
      }
    } else if (versionKey === 'redis') {
      // Redis retorna "Redis server v=7.0.14" - extrair versão
      const match = currentVersion.match(/Redis server v=(\d+\.\d+\.\d+)/);
      if (match && version.gte(match[1], REQUIRED_VERSIONS[versionKey])) {
        console.log(
          `✅ ${displayName}: ${match[0]} (>= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return true;
      } else {
        console.log(
          `❌ ${displayName}: ${currentVersion} (requer >= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return false;
      }
    } else {
      // Outros comandos retornam versão direta
      if (version.gte(currentVersion, REQUIRED_VERSIONS[versionKey])) {
        console.log(
          `✅ ${displayName}: ${currentVersion} (>= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return true;
      } else {
        console.log(
          `❌ ${displayName}: ${currentVersion} (requer >= ${REQUIRED_VERSIONS[versionKey]})`
        );
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ ${displayName}: Não encontrado ou erro na execução`);
    return false;
  }
}

// Função principal
function main() {
  console.log('🔍 Verificando versões das tecnologias necessárias...\n');

  const checks = [
    { command: 'node --version', key: 'node', name: 'Node.js' },
    { command: 'npm --version', key: 'npm', name: 'npm' },
    { command: 'git --version', key: 'git', name: 'Git' },
    { command: 'mongod --version', key: 'mongodb', name: 'MongoDB' },
    {
      command: 'redis-server --version',
      key: 'redis',
      name: 'Redis (Opcional)',
    },
  ];

  let allPassed = true;

  checks.forEach(({ command, key, name }) => {
    const passed = checkVersion(command, key, name);
    if (!passed && key !== 'redis') {
      allPassed = false;
    }
  });

  console.log('\n📋 Resumo:');
  if (allPassed) {
    console.log('✅ Todas as versões requeridas estão instaladas!');
    console.log('🚀 Você pode prosseguir com a configuração do projeto.');
  } else {
    console.log('❌ Algumas versões não atendem aos requisitos mínimos.');
    console.log('📖 Consulte o SETUP.md para instruções de instalação.');
  }

  console.log('\n📚 Documentação:');
  console.log('- SETUP.md: Instruções completas de configuração');
  console.log('- README.md: Documentação principal do projeto');
}

// Executar verificação
if (require.main === module) {
  main();
}

module.exports = { checkVersion, REQUIRED_VERSIONS };
