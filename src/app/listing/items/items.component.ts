import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private backService:DataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
  }

  onItemDetails(item)
  {
    console.log("this is the item clicked", item);
    this.backService.currentEntryID = item.id;
  
    this.router.navigate(['/', this.backService.currentEntryID]);
  }

}
