import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

/**
 * Api get me houses
 */
urlHouse='http://hp-api.herokuapp.com/api/characters'; 

/**
 *Ip that gets the members in their respective houses
 */
urlStudent= `http://hp-api.herokuapp.com/api/characters/house/`; 
constructor(private http: HttpClient) { }

/**
 * I consult the api and it gets me all the houses
 * @returns Get all the houses
 */
public getAllHouse<house>():  Observable <any>{    
  return  this.http.get<house>(this.urlHouse);
}

/**
 * Rearch in api the house that is selected
 * @param selectHouse Receive the selected house
 * @returns The list of members of the selected house
 */
public getAllstudent<Student>(selectHouse: string):  Observable <any>{    
  return  this.http.get<Student>(this.urlStudent +selectHouse);  
}

}
