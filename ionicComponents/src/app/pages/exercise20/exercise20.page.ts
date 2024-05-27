import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise20',
  templateUrl: './exercise20.page.html',
  styleUrls: ['./exercise20.page.scss'],
})
export class Exercise20Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  plants = [
    {
      name: 'Tomato',
      type: 'Fruiting',
      image: 'https://www.richardjacksonsgarden.co.uk/wp-content/uploads/2023/03/Tomato-gardeners-delight-on-plant_1200px-550x550.jpg',
      hearted: false
    },
    {
      name: 'Sunflower',
      type: 'Flowering',
      image: 'https://hips.hearstapps.com/hmg-prod/images/how-to-grow-sunflowers-1655154120.jpg?crop=0.671xw:1.00xh;0.0881xw,0&resize=980:*',
      hearted: false
    },
    {
      name: 'Rose',
      type: 'Flowering',
      image: 'https://minnetonkaorchards.com/wp-content/uploads/2022/07/Fertilizer-735x485.jpg',
      hearted: false
    },
    {
      name: 'Strawberry',
      type: 'Fruiting',
      image: 'https://plantperfect.com/wp-content/uploads/2021/06/PP-Beginners-Guide-to-Growing-Strawberries-header-growing-strawberry.jpg',
      hearted: false
    },
    {
      name: 'Lavender',
      type: 'Flowering',
      image: 'https://cdn.shopify.com/s/files/1/0513/3428/3424/products/oldenglish1.jpg',
      hearted: false
    },
    {
      name: 'Lemon',
      type: 'Fruiting',
      image: 'https://www.yarden.com/wp-content/uploads/Eureka-Lemon-Tree-400-3-1.jpg',
      hearted: false
    },
    {
      name: 'Tulip',
      type: 'Flowering',
      image: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/7/5/3/c/30012.Jpg',
      hearted: false
    },
    {
      name: 'Blueberry',
      type: 'Fruiting',
      image: 'https://thisismygarden.com/wp-content/uploads/2022/03/plant-blueberry-bushes.jpg',
      hearted: false
    }
  ];
}
