import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
