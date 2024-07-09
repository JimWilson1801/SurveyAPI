import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Survey } from 'src/survey.entity';
import { Repository } from 'typeorm';
export declare class SurveysService extends TypeOrmCrudService<Survey> {
    constructor(repo: Repository<Survey>);
}
