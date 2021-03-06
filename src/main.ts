import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname,'..','public'));
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.setViewEngine("ejs")

  app.useGlobalFilters(new HttpExceptionFilter())
  
  await app.listen(process.env.PORT);
}
bootstrap();
