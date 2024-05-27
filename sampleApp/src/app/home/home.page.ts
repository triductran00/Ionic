import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  myTitle : string = "This is a sample app";
  mySubtitle : string = "Let's learn Ionic Framework"
  showLink : boolean = true;
  Courses: any[] = [
    { id: 1, name: 'Week 1'},
    { id: 2, name: 'Week 2'},
    { id: 3, name: 'Week 3'},
    { id: 4, name: 'Week 4'},
    { id: 5, name: 'Week 5'}
  ]
  courseLink : string = "https://www.google.com";

  showCourseName(courseName : string){
    alert(courseName);
  }

  comment: string = "";
}
