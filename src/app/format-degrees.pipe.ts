import { Pipe, PipeTransform } from '@angular/core';
/*
 * Add decimals
 * Usage:
 *   value | formatDegrees
 * Example:
 *   {{ 25 | formatDegrees }}
 *   formats to: 25.0000
*/
@Pipe({name: 'formatDegrees'})
export class FormatDegreesPipe implements PipeTransform {
  transform(value: string): string {
    let exp: string = parseFloat(value).toFixed(4) + '';
      return exp;
  }
}