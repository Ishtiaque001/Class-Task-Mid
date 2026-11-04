import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Faculty } from './faculties/entities/faculty.entity.js';
import {FacultiesModule} from './faculties/faculties.module.js';

@Module({
   imports: [
     FacultiesModule,

      TypeOrmModule.forRoot({

        type:'postgres',
        host : 'localhost',
        port : 5000,
        username: 'postgres',
        password : "Charon iv@12",
        database : "faculties",
        autoLoadEntities: true,
        synchronize: true,
      })
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
