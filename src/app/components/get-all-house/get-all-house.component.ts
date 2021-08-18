import { Component, Input, OnInit, TestabilityRegistry } from '@angular/core';
import { House } from 'src/app/models/house';
import { student } from 'src/app/models/student';
import { PeopleService } from 'src/app/services/people.service';
import {sortBy} from 'sort-by';

@Component({
  selector: 'app-get-all-house',
  templateUrl: './get-all-house.component.html',
  styleUrls: ['./get-all-house.component.css']
})
export class GetAllHouseComponent implements OnInit {
 
  public filter =''; // touch the words that are leaking
  public listHouse : Array<House>= []; // List the house
  public listStudent : Array<student>= []; // List the member
  public selectHouse: string ='';  // Save the selected house
  
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
    this.filter='';
    if(this.selectHouse===''){
      this.listStudent=[];
      this.filter='';
    } 
  }

  /**
   * Method that sorts the table of members by name
   * @returns The ordered list of members
   */
  getListOrderedMember(){
    
    this.filter='';
   return this.listStudent.sort(function(name1,name2){
     if(name1.name > name2.name){
       return 1;
     }
     if(name1.name < name2.name){
       return -1
     }
     return 0;
   });
  }

  /**
   * You get the members of the house selected by the user
   */
  public getAllStudent(){    
    this._peopleService.getAllstudent<student>(this.selectHouse)
    .subscribe(data =>{
      this.listStudent=data;
    }) ;   
    
  }


 
  
}
