import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  uploadby: string;
  images:object;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {position: 1, name: 'Album1',  uploadby: 'Mahesh', images:[ "100", "101", "102" ]},
  {position: 2, name: 'Album2',  uploadby: 'Mahesh',images:[ "103", "104", "1054" ]},
  {position: 3, name: 'Album3',  uploadby: 'Mahesh',images:[ "106", "107", "108" ]},
  {position: 4, name: 'Album4',  uploadby: 'Mahesh',images:[ "109", "110", "111" ]},
  {position: 5, name: 'Album5',  uploadby: 'Mahesh',images:[ "112", "113", "114" ]},

];


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  isdisabled:boolean=true;
  isimgshows:boolean=false;
checkdarray=[];

horizontalPosition: MatSnackBarHorizontalPosition = 'end';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }


  displayedColumns: string[] = ['checkbox', 'name',  'uploadby'];
  dataSource = ELEMENT_DATA;
  //Data Will change by Username pass to api which get by sessionStorage.getItem('username')


  onShowPhotoClick(data){
    const valueJSON = sessionStorage.getItem('username');
    this.isimgshows=true;
  }

  selection(event,element){
    this.isimgshows=false;
    if(event.checked){
      this.checkdarray.push(element);
    }
    else{
      this.checkdarray.forEach((obj,index)=>{
        if(obj.name==element.name){
        this.checkdarray.splice(index,1);
        } 
    });
    }

if(this.checkdarray.length>0 && event.checked){
  this.isdisabled=false;
  if(this.checkdarray.length>2){
    this.isdisabled=true;
    this._snackBar.open('Maximum 2 Albums can be Select', 'End now', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  else{
    this.isdisabled=false;
  }
}
else if(this.checkdarray.length>0){
  this.isdisabled=false;
}
else{
  this.isdisabled=true;
}

  }

}
