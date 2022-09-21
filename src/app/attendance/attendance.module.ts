import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faAnglesLeft, faAnglesRight, faArrowRightFromBracket, faPlaneArrival, faPlaneDeparture, faChartSimple, faChartColumn, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AttendanceComponent,
    PieChartComponent,
    NumberCardChartComponent,
    GaugeChartComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    NgxChartsModule
  ]
})
export class AttendanceModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      faAnglesLeft,
      faAnglesRight,
      faArrowRightFromBracket,
      faPlaneArrival,
      faPlaneDeparture,
      faChartSimple,
      faChartColumn,
      faEllipsisVertical,
      faPenToSquare
    );
  }
 }
