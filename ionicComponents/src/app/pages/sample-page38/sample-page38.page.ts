import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page38',
  templateUrl: './sample-page38.page.html',
  styleUrls: ['./sample-page38.page.scss'],
})
export class SamplePage38Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pickerColumns = [{
    name: 'languages',
    options: [
      {
        text: 'JavaScript',
        value: 'javascript'
      }, {
        text: 'TypeScript',
        value: 'typescript'
      }, {
        text: 'Rust',
        value: 'rust'
      }, {
        text: 'C#',
        value: 'c#'
      }
    ]
  }];

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value: any) => {
        window.alert(`You selected: ${value.languages.value}`);
      }
    }
  ];

}
