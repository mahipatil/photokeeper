import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  emailid: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mahesh', emailid: 'mahi.patil26@gmail.com', address: 'Pune'},
  {position: 2, name: 'Abc', emailid: 'abc@xyz.com', address: 'Mumbai'},
  {position: 3, name: 'Qwer', emailid: 'qwer@yte.com', address: 'Karad'},
  {position: 4, name: 'MaheshP', emailid: 'mahesh.patil@gmail.com', address: 'Kolhapur'},
  {position: 5, name: 'MaheshG', emailid: 'mahesh@gmail.com', address: 'Satara'},

];




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private _router: Router,

  ) { }

  ngOnInit() {
  }

    displayedColumns: string[] = ['position', 'name', 'emailid', 'address'];
  dataSource = ELEMENT_DATA;


  onrowClick(data){
    sessionStorage.setItem('username', JSON.stringify(data.name));
    this._router.navigate(['/album']);
  }



}
