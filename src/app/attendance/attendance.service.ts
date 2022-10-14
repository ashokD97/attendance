import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from '../shared/constants/url.constant';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  getAllEmployeeAttendance(){
    return this.http.get(URLs.getAllEmployeeAttendance);
  }

  getUserTimelog(userId?:any){
     return this.http.get(URLs.getUserTimeLog)
  }

  getUserLeaveData(){
    return this.http.get(URLs.getUserLeaveData);
  }
  getNewEmployeeData(){
    return this.http.get(URLs.getNewEmployeeData);
  }
  updateEmployeeRecords(options:any){
    return this.http.get(URLs.getNewEmployeeData);
  }
}
