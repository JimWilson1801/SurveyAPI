import { Controller, Get } from '@nestjs/common';
import { CreateManyDto, Crud, CrudController, CrudRequest, CrudService, GetManyDefaultResponse } from '@nestjsx/crud';
import { User } from 'src/user.entity';
import { UsersService } from './users.service';

@Crud({
    model:{ type: User}
})
@Controller('users')
export class UsersController implements CrudController<User> {
    public service: UsersService;
}
