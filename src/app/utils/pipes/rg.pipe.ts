import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'rg' })
export class RgPipe implements PipeTransform {
    transform(value: string | number): string {
        let valorFormatado = value + '';

        valorFormatado = valorFormatado
            .replace(/[^0-9]/, '')
            .replace(
                /(\d{2})(\d{3})(\d{3})(\d{1})/,
                '$1.$2.$3-$4'
            );
        return valorFormatado
    }
}