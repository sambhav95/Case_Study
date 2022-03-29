import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any,args?: any[]): any {
    return this.getDate(value)
  }
  getDate(date:any){
    if (!date) {
      return null;
    }
    const dateValue = date.split(',')  
    const seprateDate = dateValue[0].split('/');
    
    return (seprateDate[1] + '-' + seprateDate[0] + '-' + seprateDate[2]+' ' +dateValue[1]);
  }
  }

