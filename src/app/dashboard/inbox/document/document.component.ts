import { Component, OnInit, NgModule, ViewChild, HostListener  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SearchpipeModule } from 'src/app/shared/pipes/searchpipe/searchpipe.module';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';


@Component({
  selector: 'f2ml-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  displayedColumns: string[] = ['documentType',  'Date', 'Financeproduct', 'contrat', 'vehicle', 'RegistrationNumber','Download', 'view'];  //
  listContracts:any = [
    {"documentType": "Invoice monthly","Date": "12/05/2021","Financeproduct": "Personal Contract","contrat": "100P0610206","vehicle": "3008 Peugeot","RegistrationNumber": "ww-342-ZE","Download": "","view": ""
    },
    {"documentType": "Death insurance","Date": "21/01/2016","Financeproduct": "Personal Finance","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "AA-212-ZB","Download": "","view": ""
    },
    {"documentType": "Welcome letter","Date": "30/05/2016","Financeproduct": "Personal Contract","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "TY-456-RF","Download": "","view": ""
    },
    {"documentType": "General sales","Date": "21/05/2016","Financeproduct": "Personal Contract ","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "TY-456-RF","Download": "","view": ""
    },
    {"documentType": "Invoice","Date": "21/05/2016","Financeproduct": "Personal Contract ","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "TY-456-RF","Download": "","view": ""
    },
    {"documentType": "Invoice","Date": "21/05/2016","Financeproduct": "Personal Contract ","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "TY-456-RF","Download": "","view": ""
    },
    {"documentType": "Invoice","Date": "21/05/2016","Financeproduct": "Personal Contract ","contrat": "100P0610206","vehicle": "CS Citroén","RegistrationNumber": "TY-456-RF","Download": "","view": ""
    },
   ];
  dataSource = new MatTableDataSource(this.listContracts);
  displayLength: number = 5;
  dataRowsToShow = 5;
  expended: boolean = false;
  expandable!: boolean;
  sortedData:any = [];
  isMobile!:boolean;
  showAll!: boolean;
  myVal = 5;
  searchText: string = "";
  innerWidth: number = window.innerWidth;
  noData:boolean = false;
  helpExtended: boolean = false;

  constructor(private _liveAnnouncer: LiveAnnouncer, public deviceDetector: DeviceDetectorService) {
  }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  expand(): void {
    this.displayLength = this.listContracts.length;
    this.dataSource.sort = this.sort;
    this.expended = true;
  }
  shrink(): void {
    this.displayLength = 5;
    this.dataSource.sort = this.sort;
    this.expended = false;
  }
  expandMobile() {
    this.showAll=true;
    this.myVal = this.listContracts.length;
  }
  shrinkMobile() {
    this.showAll=false;
    this.myVal = 5;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.sortedData = this.sortedData = this.listContracts.slice();
    this.dataSource = new MatTableDataSource(this.listContracts);
    this.showAll = false;
    this.onResize();
  }
  ngOnChanges(){
    if (this.dataSource && this.sortedData.length >= 1){
      if (this.sortedData.length > this.dataRowsToShow) {
        this.expandable = true;
      } else {
        this.expandable = false;
      }
      this.shrink();
    }

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 993) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.filteredData.length == 0) {
      this.noData = true;
    }else {
      this.noData = false;
    }
  }

  helpTrigger() {
    this.helpExtended = true;
  }

  closeHelp(event:any) {
    event.stopPropagation();
    this.helpExtended = false;
  }

  filterTable(event : any){
    this.dataSource.filter =  event.target.value.toLocaleLowerCase()
  }
}
