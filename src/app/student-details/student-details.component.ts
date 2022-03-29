import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  displayColumns: Array<any> = ['Name', 'Class', 'Section', 'Sub1', 'Sub2', 'Sub3'];
  studentDetail: any = [{
    Name: 'Rahul',
    Class: 6,
    Section: 'A',
    Sub1: 80,
    Sub2: 70,
    Sub3: 90
  },
  {
    Name: 'Peter',
    Class: 3,
    Section: 'B',
    Sub1: 70,
    Sub2: 50,
    Sub3: 80
  },
  {
    Name: 'Tina',
    Class: 10,
    Section: 'D',
    Sub1: 70,
    Sub2: 60,
    Sub3: 40
  },
  {
    Name: 'Hima',
    Class: 5,
    Section: 'E',
    Sub1: 70,
    Sub2: 95,
    Sub3: 75
  }, {
    Name: 'Sambhav',
    Class: 11,
    Section: 'C',
    Sub1: 70,
    Sub2: 100,
    Sub3: 45
  }]
  dtOption: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOption = {
      paging: false,
      ordering: true,
      searching: false,
      info: false,
    };
  }


}
