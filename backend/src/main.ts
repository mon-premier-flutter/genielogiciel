import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 1. Active le CORS pour ton React (Port 5173 par défaut)
  app.enableCors();

  // 2. Optionnel : Ajoute un préfixe /api (ex: http://localhost:3000/api/users)
  app.setGlobalPrefix('api');
  
  // 3. Écoute sur le port 3000 ou celui de l'hébergeur
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Backend lancé sur : http://localhost:${port}/api`);
}

bootstrap();