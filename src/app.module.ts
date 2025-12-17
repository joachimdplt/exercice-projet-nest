import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormationModule } from './formation/formation.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [FormationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
