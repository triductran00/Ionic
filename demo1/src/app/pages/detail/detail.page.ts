import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any = {};

  constructor(private route: ActivatedRoute) { }
  
  isLoaded=false

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    fetch('./assets/menu.json').then(res => res.json())
    .then(json => {
     this.data = json.filter((item:any)=>item.id==id)[0];
     this.isLoaded = true;
    })
  }
}
