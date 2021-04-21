import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'cpf'})
export class CpfPipe implements PipeTransform{

    transform(value: string, before: string, after: string): string {
       let p1 = value.substring(0,3);
       let p2 = value.substring(3,6);
       let p3 = value.substring(6,9);
       let p4 = value.substring(9,11);

        return `${p1}.${p2}.${p3}-${p4}`;
    }

}