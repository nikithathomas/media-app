import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ellipsePipe' })
export class EllipsePipe implements PipeTransform {
    transform(value: string): string {
        let fileName = value;
        if (fileName.length > 25) {
            const extensionIndex = fileName.indexOf('.');
            const lastSubstring = fileName.substring(extensionIndex - 3, fileName.length);
            const firstSubstring = fileName.substring(0, 8);
            fileName = `${firstSubstring}...${lastSubstring}`;
        }
        return fileName;
    }
}