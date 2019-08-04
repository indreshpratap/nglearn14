import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trim' })
export class TrimPipe implements PipeTransform {
    transform(value: string, max = 20,trimChars='...'): any {
        console.log('Trim pipe', value);
        if (!value) {
            return value;
        }

        if (value && value.length > max) {
            return value.substr(0, max) + trimChars;
        } else {
            return value;
        }
    }
}