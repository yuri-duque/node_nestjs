import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);

  let appUrl = await app.getUrl();
  appUrl = appUrl.replace('[::1]', 'localhost');

  console.log(`Application is running on: ${appUrl}`);
}
bootstrap();
