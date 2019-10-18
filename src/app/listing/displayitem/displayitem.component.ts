import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayitem',
  templateUrl: './displayitem.component.html',
  styleUrls: ['./displayitem.component.scss']
})
export class DisplayitemComponent implements OnInit {

  constructor(private backService:DataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    const id  = this.route.snapshot.params['id'];
    console.log("this is the id chosen", id);
     this.backService.listData.filter((x)=>{
      if (x.id == id)
      {
        this.backService.currentEntry=x;
        return;
      }
     
    });
    console.log(this.backService.currentEntry.id)
    if(this.backService.currentEntry.id==undefined)
    {
      console.log("hello");
      this.router.navigate(['/']);
    }
    
  }

  goBack()
  {
    this.backService.currentEntryID='';
    this.backService.currentEntry=={};
    this.router.navigate(['/']);
  }

}