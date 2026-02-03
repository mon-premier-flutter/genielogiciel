import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Active le CORS pour que ton React puisse appeler l'API
  app.enableCors();
  
  // Important pour Vercel : écouter sur le port fourni par l'environnement ou 3000
  await app.listen(process.env.PORT || 3000);
}

// On ne lance bootstrap que si on n'est pas en mode "Serverless" (optionnel mais propre)
bootstrap();