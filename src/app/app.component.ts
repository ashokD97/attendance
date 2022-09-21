import { Component } from '@angular/core';
import { faHouse, faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Attendance';
  fahouse = faHouse;
  faenvelope = faEnvelope;
}
