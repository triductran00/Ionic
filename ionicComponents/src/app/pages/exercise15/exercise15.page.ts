import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise15',
  templateUrl: './exercise15.page.html',
  styleUrls: ['./exercise15.page.scss'],
})
export class Exercise15Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pets: Array<{ name: string, type: string, gender: string }> = [
    { name: 'Buddy', type: 'Dog', gender: 'Male' },
    { name: 'Lucy', type: 'Cat', gender: 'Female' },
    { name: 'Max', type: 'Dog', gender: 'Male' },
    { name: 'Luna', type: 'Cat', gender: 'Female' },
    { name: 'Rocky', type: 'Hamster', gender: 'Male' }
  ];
}
