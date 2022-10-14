import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription, switchMap } from 'rxjs';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit,OnDestroy {
  allEmployeeData: any[] = [];
  mobileView: boolean = false;
  tableOptions:any = {
    limit:10,
    offset:0
    // sort options to be added later 
  }
  totalRecords:number = 0;
  page = 1;
  tableCols:any[] = [
    {key:'id',displayName:'Id'},
    {key:'code',displayName:'Code'},
    {key:'fName',displayName:'First Name'},
    {key:'lName',displayName:'Last Name'},
    {key:'total',displayName:'Total'},
    {key:'availed',displayName:'Availed'},
    {key:'balance',displayName:'Balance'}
  ]; 
  searchColsVal:any={};
  selectedSearchCol:any = 'id';
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  private readonly searchSubject = new Subject<string | undefined>();
  private searchSubscription?: Subscription;
  constructor(private attendanceService: AttendanceService) {
    if (window.matchMedia("(max-width: 767px)").matches) {
      this.mobileView = true;
    }
  }

  ngOnInit(): void {
    this.bindSearchDebounce();
    this.getNewEmployeeData();
  }
  getNewEmployeeData() {
    this.attendanceService.getNewEmployeeData().subscribe((res: any) => {
      this.allEmployeeData = res.data;
      this.totalRecords = res.totalRecords;
      // set table headers from this api in tableCols
    })
  }
  pageChange(){
    this.tableOptions.offset = (this.page-1)*10;
    this.attendanceService.updateEmployeeRecords(this.tableOptions).subscribe((res:any)=>{
      this.allEmployeeData = res.data;
   });
  }
  // mobile view functions
  onScroll(){
    if(this.allEmployeeData.length != this.totalRecords){
      this.attendanceService.updateEmployeeRecords(this.tableOptions).subscribe((res:any)=>{
        res.data.forEach((element:any) => {
          this.allEmployeeData.push(element)
        });
     });
     this.tableOptions.offset += this.tableOptions.limit;
    }
    
  }
  onSearchQueryInput(event: Event,key?:string): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());
    if(key){
      this.selectedSearchCol = key;
    }
  }
  bindSearchDebounce(){
    this.searchSubscription = this.searchSubject
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchQuery) => {
        console.log(searchQuery);
        let options:any = {
          offset: this.tableOptions.offset,
          limit: this.tableOptions.limit
        };
        options[this.selectedSearchCol] = searchQuery;
        this.tableOptions[this.selectedSearchCol] = searchQuery;
        if(!this.mobileView){
          Object.keys(this.searchColsVal).forEach(key=>{
            if(key != this.selectedSearchCol){
              options[key] = this.searchColsVal[key];
              this.tableOptions[key] = this.searchColsVal[key];
            }
          })
        }
        return this.attendanceService.updateEmployeeRecords(options);
      })
    )
    .subscribe((results:any) => {
      this.allEmployeeData = results.data;
  });
  }
  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
}
