import { AdminComponent } from './admin/admin.component';
import { AttendanceComponent } from './attendance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:AttendanceComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
