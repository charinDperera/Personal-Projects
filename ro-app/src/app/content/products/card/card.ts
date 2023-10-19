import { Item } from "src/app/Models/item";

export class Card{

    item!: Item;

    constructor(item:Item){
        this.item = item;
    }
}