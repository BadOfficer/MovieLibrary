import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configuration from 'src/configuration';
import { User } from '../users/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { LikedlistModule } from '../likedlist/likedlist.module';

@Module({
  imports: [UsersModule, SequelizeModule.forRootAsync({
    imports: [ConfigModule, AuthModule, TokenModule, LikedlistModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: "postgres",
      host: configService.get("db_host"),
      port: configService.get("db_port"),
      username: configService.get("db_user"),
      database: configService.get("db_name"),
      password: configService.get("db_password"),
      models: [User],
      synchronize: true,
      autoLoadModels: true
    })
  }), ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
