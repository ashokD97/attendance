import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  single: any[]=[
    {
      "name": "Total",
      "value": 40
    },
    {
      "name": "CL",
      "value": 20
    },
    {
      "name": "PL",
      "value": 10
    },
    {
      "name": "Other",
      "value": 5
    },
    {
      "name": "Balance",
      "value": 15
    },
    {
      "name": "Availed",
      "value": 5
    }
  ];
  view: [number,number] = [700, 300];
  legend: boolean = true;
  legendPosition: any = 'right';

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {}
  ngOnInit(): void {
  }
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
 

}
