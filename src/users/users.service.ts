import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'src/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor (@InjectRepository(User) repo: Repository<User>){
        super(repo)
    }
    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.repo.findOne({ where: { username } });
    }
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.findOneByUsername(username);
        if (user &&  (pass == user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

}
