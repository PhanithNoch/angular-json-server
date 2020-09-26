import { Component } from '@angular/core';
import {RestAPIService} from './rest-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data:any = [];

  constructor(private rest_api:RestAPIService){
 

  }

  ngOnInit(){ // page load
    // this.data = this.rest_api.getData("assets/data/data.json").subscribe(res=>{
    //   console.log(res);
    //     this.data = res;
    //   });
  }
  
  

}
