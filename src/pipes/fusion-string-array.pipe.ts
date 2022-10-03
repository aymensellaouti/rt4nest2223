import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FusionStringArrayPipe implements PipeTransform {
  transform(skills: string[], metadata: ArgumentMetadata) {
    console.log('Pipe');
    if (!skills) {
      throw new BadRequestException();
    }
    if (metadata.type == 'body') {
      return skills.join('-').toUpperCase();
    }
    return skills;
  }
}
