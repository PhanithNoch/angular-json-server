import { Component, OnInit } from '@angular/core';
import {RestAPIService} from "../rest-api.service";
@Component({
  selector: 'app-photo-component',
  templateUrl: './photo-component.component.html',
  styleUrls: ['./photo-component.component.css']
})
export class PhotoComponentComponent implements OnInit {
url = "http://localhost:3000/photos/";
  data:any = [];
  constructor(private _restapi:RestAPIService ) { }

  ngOnInit() {
    this._restapi.getData(this.url).subscribe(res=>{
      this.data = res;
    });
  }


  delete(id){
    this._restapi.deleteData(this.url,id).subscribe(res=>{

    })
  }

  

}
