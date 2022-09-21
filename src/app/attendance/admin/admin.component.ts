import { AttendanceService } from './../attendance.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  allEmployeeData:any[] = [];
  constructor(private modalService: NgbModal,private attendanceService:AttendanceService) { }

  ngOnInit(): void {
    this.getAllEmployeeAttendance();
  }
  getAllEmployeeAttendance(){
    this.attendanceService.getAllEmployeeAttendance().subscribe((res:any)=>{
      this.allEmployeeData = res;
    })
  }
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  }
}
