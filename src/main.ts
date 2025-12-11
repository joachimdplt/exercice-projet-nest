import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Active la validation automatique pour tous les DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Supprime les propriétés non déclarées dans le DTO
      forbidNonWhitelisted: true, // Erreur si une propriété inconnue est envoyée
      transform: true, // Transforme les types automatiquement (ex: string -> number)
    }),
  );

  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.error('Erreur lors du démarrage de l’application', err);
  process.exit(1); // quitte le process si l’app ne démarre pas
});
