import { Component, OnInit } from '@angular/core';
import {RestAPIService} from '../rest-api.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos:any = [];
  constructor(private rest_api:RestAPIService) { }

  ngOnInit() {
    this.rest_api.getData("http://localhost:3000/photos").subscribe(
      res=>{
        this.photos = res;
        console.log(res);
      }
    );
  }

}
