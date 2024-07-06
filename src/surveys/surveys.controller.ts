import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Survey } from 'src/survey.entity';
import { SurveysService } from './surveys.service';

@Crud({
    model:{ type: Survey}
})
@Controller('surveys')
export class SurveysController implements CrudController<Survey> {
    public service: SurveysService;
}
