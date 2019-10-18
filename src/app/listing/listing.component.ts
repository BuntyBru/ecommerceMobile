import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor(private backService:DataService) { }

  ngOnInit() {
    this.onitemClick(this.backService.categoryData[0]);
  
  }

  onitemClick(item)
  {
    this.backService.categoryData.forEach((x)=>{
      x.click=false;
    });
    item.click = true;
    this.backService.listDataInterface = this.backService.listData.filter((x)=>{
      if(x.category_id == item.id)
      {
        return x;
      }
    })
    console.log(this.backService.listDataInterface);
  }
}
