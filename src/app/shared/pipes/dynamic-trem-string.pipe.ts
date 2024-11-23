import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicTremString'
})
export class DynamicTremStringPipe implements PipeTransform {

  transform(text: string, tremSize: number): unknown {
    return text.split(' ' ).slice(0, tremSize).join(' ');
  }

}
