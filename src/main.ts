import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Quickstart')
    .setDescription('Quickstart description')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
};
bootstrap()
  .then(() => {
    Logger.log('Bootstrap started successfully', NestApplication.name);
  })
  .catch((e) => Logger.error(e.stack, NestApplication.name));
