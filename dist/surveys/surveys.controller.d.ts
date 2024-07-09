import { CrudController } from '@nestjsx/crud';
import { Survey } from 'src/survey.entity';
import { SurveysService } from './surveys.service';
export declare class SurveysController implements CrudController<Survey> {
    service: SurveysService;
    constructor(service: SurveysService);
}
