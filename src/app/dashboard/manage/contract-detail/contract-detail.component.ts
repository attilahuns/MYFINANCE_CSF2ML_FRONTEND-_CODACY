import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ContractDetail  {
  document: string;
  reference: string;
  date: string;
  download: string;
  view: string;
  unopened : boolean;
}

@Component({
  selector: 'f2ml-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit , AfterViewInit {

  ELEMENT_DATA: ContractDetail[] = [
    {document : 'PCP Contract' , reference : '100P6TG79', date : '13/05/2021' , download : '' , view : '' , unopened : true},
    {document : 'Invalidity insurance' , reference : 'KXLFCF4X.pdf', date : '12/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Welcome letter' , reference : 'Letter_1.pdf', date : '10/05/2021' , download : '' , view : '' , unopened : false}
  ]

  displayedColumns: string[] = ['document', 'reference', 'date', 'download','view'] ;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
