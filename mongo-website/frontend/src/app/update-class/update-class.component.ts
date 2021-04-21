import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  constructor(public classSer:ClassService) { }

  ngOnInit(): void {
  }

  updatePrice(productRef:any){
    this.classSer.updateClassPrice(productRef);
  }
}
