import { Component, Input, OnInit } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';
import { FormControl, Validators } from '@angular/forms';
import { MatInputModule, MatTableDataSource } from '@angular/material';
import { House } from 'src/app/models/house';
import { student } from 'src/app/models/student';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-get-all-house',
  templateUrl: './get-all-house.component.html',
  styleUrls: ['./get-all-house.component.css']
})
export class GetAllHouseComponent implements OnInit {
 
  public listHouse : Array<House>= []; // List the house
  public listStudent : Array<student>= []; // List the member
  public selectHouse: string ='';  // Save the selected house
  columns : string []= ['n','name',	'gender', 'ancestry',	'hairColour', 'image'];  // Save la columns for show in table 
  public dataSource : MatTableDataSource<student>; // Initialize datasource with membership list  

  animalControl = new FormControl('', Validators.required); //validate that the box is not empty 

  constructor(private _peopleService: PeopleService) {
  }
  
  /**
   * Created methods are initialized
   */
  ngOnInit() {
   this.getAllHouse();
   this.getAllStudent();   
  }

  /**
   * Get the houses that are in api
   * Recoore the list of causes to eliminate repeated houses
   */
  public getAllHouse(){
    this._peopleService.getAllHouse<House>()
    .subscribe(data =>{
      for (let clave of data){
        if(this.listHouse.find(x=>x==clave.house)==undefined){
          this.listHouse.push(clave.house);         
        }     
      }
    }) 
  }

  /**
   * Updates the table each time it is selected and displayed
   */
  updatestudent(){
    this.getAllStudent();   
    if(this.selectHouse===''){
      this.dataSource = new MatTableDataSource();
    } 
  }

  /**
   * You get the members of the house selected by the user
   */
  public getAllStudent(){    
    this._peopleService.getAllstudent<student>(this.selectHouse)
    .subscribe(data =>{
      this.listStudent=data;
      this.dataSource = new MatTableDataSource(this.listStudent);
    
    }) ;   
    
  }
  /**
   * Look in the table what the user wants to infiltrate
   * @param event word to be searched
   */
  searchFilter(event){
    
    const searchValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter= searchValue.trim().toLowerCase();   
  }

 
  
}
