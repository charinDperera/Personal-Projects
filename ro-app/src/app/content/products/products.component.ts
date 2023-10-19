import { Component } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // can use https://picsum.photos/500/500 to get a random picture with given size for
  // dev purposes
  items: Item[] = [new Item(7001,"S-Shape","135x78x95","assets/Items/1.webp"),
  new Item(7002,"S-Shape","135x78x95","assets/Items/2.webp"),
  new Item(7003,"O-Shape","135x78x95","assets/Items/3.webp"),
  new Item(7004,"W-Shape","135x78x95","assets/Items/4.webp"),
  new Item(7005,"B-Shape","135x78x95","assets/Items/5.webp"),
  new Item(7006,"D-Shape","135x78x95","assets/Items/6.webp"),
  new Item(7007,"Normal","135x78x95","assets/Items/7.webp"),
  new Item(7008,"Varnished","135x78x95","assets/Items/8.webp"),
  new Item(7009,"Ditch","135x78x95","assets/Items/9.webp"),
  new Item(7009,"Deck","135x78x95","assets/Items/3.webp"),
  new Item(7009,"Bald","135x78x95","assets/Items/6.webp"),
  new Item(7009,"Polished","135x78x95","assets/Items/2.webp")
]
}
