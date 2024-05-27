import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page55',
  templateUrl: './sample-page55.page.html',
  styleUrls: ['./sample-page55.page.scss'],
})
export class SamplePage55Page implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.addItems(5);
  }

  public names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  

  chooseRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  items: { name: string, unread: boolean }[] = [];
  addItems(count: number, unread = false) {
    for (let i = 0; i < count; i++) {
      this.items.unshift({
        name: this.chooseRandomName(),
        unread: unread,
      });
    }
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.addItems(3, true);
      event.target.complete();
    }, 2000);
  }
}
