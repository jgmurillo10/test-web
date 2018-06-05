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
  transform(value: number): number {
    let exp = parseFloat(value).toFixed(4);
    if (isNaN(exp)) {
    	return value;
    }
    return exp;
  }
}