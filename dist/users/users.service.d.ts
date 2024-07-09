import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'src/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService extends TypeOrmCrudService<User> {
    constructor(repo: Repository<User>);
}