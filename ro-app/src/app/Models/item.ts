export class Item{
    itemID: number;
    itemName: string;
    itemDimensions: string;
    itemImageURL: string;

    constructor(itemID: number, itemName: string, itemDimensions: string, itemImageURL: string){
        this.itemID = itemID;
        this.itemName = itemName;
        this.itemDimensions = itemDimensions;
        this.itemImageURL = itemImageURL;

    }
}