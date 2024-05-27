import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise12',
  templateUrl: './exercise12.page.html',
  styleUrls: ['./exercise12.page.scss'],
})
export class Exercise12Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange(event: any, groupIndex: number, itemIndex: number) {
    console.log('Checkbox value:', event.detail.value);
    console.log('Checkbox change event:', event.detail.checked);
    this.groups[groupIndex].items[itemIndex].checked = event.detail.checked;
  }

  groups = [
    {
      name: 'Appetizers',
      items: [
        { name: 'Garlic Bread', checked: false },
        { name: 'Mozzarella Sticks', checked: false },
        { name: 'Nachos', checked: false },
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Cheesecake', checked: false },
        { name: 'Chocolate Cake', checked: false },
        { name: 'Ice Cream', checked: false },
      ]
    }
  ];

  selectedItems: any[] = [];

  updateSelectedItems() {
    this.selectedItems = [];
    this.groups.forEach(group => {
      group.items.forEach(item => {
        if (item.checked) {
          this.selectedItems.push(item);
        }
      });
    });
  }
}
