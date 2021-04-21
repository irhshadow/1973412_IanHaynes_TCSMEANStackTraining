import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-delete-class',
  templateUrl: './delete-class.component.html',
  styleUrls: ['./delete-class.component.css']
})
export class DeleteClassComponent implements OnInit {

  constructor(public classSer:ClassService) { }

  ngOnInit(): void {
  }

  deleteClass(id:any){
    console.log(id);
    this.classSer.deleteClass(id);
  }
}