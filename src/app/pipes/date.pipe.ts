import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  // how should dates appear in our FE , just an example we can leave it further in dev phase
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
