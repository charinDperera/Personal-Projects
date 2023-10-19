import { Component } from '@angular/core';
import { Item } from '../Models/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  items: Item[] = [new Item(7001,"S-Shape","135x78x95","assets/Items/1.webp"),
    new Item(7002,"S-Shape","135x78x95","assets/Items/2.webp"),
    new Item(7003,"O-Shape","135x78x95","assets/Items/3.webp"),
    new Item(7004,"W-Shape","135x78x95","assets/Items/4.webp"),
    new Item(7005,"B-Shape","135x78x95","assets/Items/5.webp"),
    new Item(7006,"D-Shape","135x78x95","assets/Items/6.webp"),
    new Item(7007,"Normal","135x78x95","assets/Items/7.webp"),
    new Item(7008,"Varnished","135x78x95","assets/Items/8.webp"),
    new Item(7009,"Non-Varnished","135x78x95","assets/Items/9.webp")
  ]

}
