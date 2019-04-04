//Service for getting the Registered users
import { Injectable } from '@angular/core';
import { Details } from 'src/app/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private httpClient: HttpClient) { }

    getDetails(): Observable<Details>{ //function returns all the registered users
        return this.httpClient.get<Details>('http://localhost:3000/RegisteredUsers');
      }
      login(email){ //function returns the details of the user trying to log in
        return this.httpClient.get('http://localhost:3000/RegisteredUsers/?email='+email);
      }
}
