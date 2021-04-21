import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-store-class',
  templateUrl: './store-class.component.html',
  styleUrls: ['./store-class.component.css']
})
export class StoreClassComponent implements OnInit {

  constructor(public classSer:ClassService) { }

  ngOnInit(): void {
  }

  addClass(classRef: any){
    this.classSer.storeClass(classRef);
  }

}
