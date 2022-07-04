import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

export interface PeriodicElement  {
  request: string;
  details: string;
  status: string;
  date: string;
  color: string;
}

@Component({
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit , AfterViewInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {request: 'Request 1', details: 'Modify my personal data', status: 'In Progress', date: '09/06/2022' , color : '#FFC44F'},
    {request: 'Request 2', details: 'Declare a damage', status: 'Cancelled', date: '09/06/2021' , color : '#FF0000' },
    {request: 'Request 3', details: 'Modify my bank information', status: 'Completed', date: '09/06/2015' , color : '#00794D'},
    {request: 'Request 4', details: 'Modify my bank details', status: 'Completed', date: '09/06/2016' , color : '#00794D'},
    {request: 'Request 1', details: 'Modify my personal data', status: 'In Progress', date: '09/06/2022' , color : '#FFC44F'},
    {request: 'Request 2', details: 'Declare a damage', status: 'Cancelled', date: '09/06/2021' , color : '#FF0000' },
    {request: 'Request 3', details: 'Modify my bank information', status: 'Completed', date: '09/06/2015' , color : '#00794D'},
    {request: 'Request 4', details: 'Modify my bank details', status: 'Completed', date: '09/06/2016' , color : '#00794D'},
    {request: 'Request 1', details: 'Modify my personal data', status: 'In Progress', date: '09/06/2022' , color : '#FFC44F'},
    {request: 'Request 2', details: 'Declare a damage', status: 'Cancelled', date: '09/06/2021' , color : '#FF0000' },
    {request: 'Request 3', details: 'Modify my bank information', status: 'Completed', date: '09/06/2015' , color : '#00794D'},
    {request: 'Request 4', details: 'Modify my bank details', status: 'Completed', date: '09/06/2016' , color : '#00794D'},
    {request: 'Request 1', details: 'Modify my personal data', status: 'In Progress', date: '09/06/2022' , color : '#FFC44F'},
    {request: 'Request 2', details: 'Declare a damage', status: 'Cancelled', date: '09/06/2021' , color : '#FF0000' },
    {request: 'Request 3', details: 'Modify my bank information', status: 'Completed', date: '09/06/2015' , color : '#00794D'},
    {request: 'Request 4', details: 'Modify my bank details', status: 'Completed', date: '09/06/2016' , color : '#00794D'},
  ];

  displayedColumns: string[] = ['request', 'details', 'status', 'date'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA.slice(0,5));

  searchFilter : string = "";
  fullDataDisplayed : boolean = false;

  constructor(public deviceDetector: DeviceDetectorService) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  filterTable(event : any){
    this.dataSource.filter =  event.target.value.toLocaleLowerCase()
  }

  showData(){
    this.dataSource.data = this.fullDataDisplayed ? this.ELEMENT_DATA.slice(0,5) : this.ELEMENT_DATA;
    this.fullDataDisplayed = !this.fullDataDisplayed;
  }

}
