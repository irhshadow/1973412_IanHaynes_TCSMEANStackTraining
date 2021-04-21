import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
@Component({
  selector: 'app-show-class',
  templateUrl: './show-class.component.html',
  styleUrls: ['./show-class.component.css']
})
export class ShowClassComponent implements OnInit {
  constructor(public classSer:ClassService) { }
  resultMsg:string = "Class Not Found";
  ngOnInit(): void {
  }

  getClass(id:any){
    this.classSer.getClass(id).subscribe(result => {
      if(result?._id==id){
        this.resultMsg = `Class id is ${result._id} Class Name is ${result.name} Class Description is ${result.description} Class amount is ${result.amount}`;
      }
    })
  }
}
