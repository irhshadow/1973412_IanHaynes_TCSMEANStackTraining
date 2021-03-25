import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tbl = document.createElement("table");
    tbl.id = "tbl";
    let head = tbl.insertRow();
    let headers = ["Name", "Number"];
    for (var i = 0; i < 2; i++) {
      let data_1 = head.insertCell();
      data_1.appendChild(document.createTextNode(headers[i]));
  }
    document.getElementById("table")!.appendChild(tbl);
  }

  addEntry(){
    let name = (<HTMLFormElement>document.getElementById("contactName")!).value;
    let number = (<HTMLFormElement>document.getElementById("contactNumber")!).value;
    let tbl = (<HTMLTableElement>document.getElementById("tbl"));
    let head = tbl.insertRow();
    let nameData = head.insertCell();
    nameData.style.backgroundColor = "#ddd";
    nameData.style.border = "1px solid white"
    nameData.appendChild(document.createTextNode(name));
    let numberData = head.insertCell();
    numberData.style.backgroundColor = "#ddd";
    numberData.appendChild(document.createTextNode(number));
    (<HTMLFormElement>document.getElementById("entry")!).reset();
  }
}
