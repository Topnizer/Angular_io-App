// Service for Registering a New User
import { Injectable } from '@angular/core';
import { Details } from 'src/app/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {


  constructor(private httpClient: HttpClient) { }

    registerDetails(details: Details): Observable<Details>{ 
        return this.httpClient.post<Details>('http://localhost:3000/RegisteredUsers', details);
      }

}