import { AttendanceService } from './../attendance.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger("inOutPaneAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }), //apply default styles before animation starts
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
        animate(
          "600ms ease-in-out",
          style({ opacity: 0, transform: "translateX(-100%)" })
        )
      ])
    ])
  ]
})
export class UserComponent implements OnInit {

  monthsArr = [
    {id:0,name:'Jan'},
    {id:1,name:'Feb'},
    {id:2,name:'Mar'},
    {id:3,name:'Apr'},
    {id:4,name:'May'},
    {id:5,name:'Jun'},
    {id:6,name:'Jul'},
    {id:7,name:'Aug'},
    {id:8,name:'Sep'},
    {id:9,name:'Oct'},
    {id:10,name:'Nov'},
    {id:11,name:'Dec'},
  ];
  yearArr:any = [];
  currentMonth:number;
  currentYear:number;
  selectedMonth:number;
  selectedYear:number;
  leaveManagementData:any[]=[];
  todayTimeLogData:any = {
    timeIn:'9:45',
    timeOut:[]
  };
  chartViewEnabled:boolean = false;
 
  constructor(private attendaceService:AttendanceService) { 
    const d = new Date();
    this.selectedMonth = d.getMonth();
    this.selectedYear = d.getFullYear();
    this.currentMonth = d.getMonth();
    this.currentYear = d.getFullYear();
  }

  ngOnInit(): void {
    this.prepareYearArr();
    this.getLeaveManagementData();
    this.getTimeLogData();
  }
  prepareYearArr(){
    const d = new Date();
    this.yearArr = Array.from(Array(10), (e,i)=>d.getFullYear()-10+i+1);
  }
  getLeaveManagementData(){
    this.attendaceService.getUserLeaveData().subscribe((res:any)=>{
      this.leaveManagementData = res;
    })
  }
  getTimeLogData(){
    this.attendaceService.getUserTimelog().subscribe((res:any)=>{
      this.todayTimeLogData.timeIn = res.timeIn;
      this.todayTimeLogData.timeOut = res.timeOut;
    })
    
  }
  prevMonth(){
    if(this.selectedMonth == 0){
      this.selectedMonth = 11;
      this.selectedYear--;
    }else{
      this.selectedMonth--;
    }
  }
  nextMonth(){
    if(this.selectedMonth == 11){
      this.selectedMonth = 0;
      this.selectedYear++;
    }else{
      this.selectedMonth++;
    }
  }
  
}
