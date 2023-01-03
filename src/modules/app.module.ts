import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AccountModule } from './account.module';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
