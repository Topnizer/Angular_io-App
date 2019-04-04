// Service for Updating the Profile 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UpdateProfile {

    constructor(private httpClient: HttpClient) { }

    updateDetails(details, id){
        const url= 'http://localhost:3000/RegisteredUsers/'+id ;
        console.log(url);
        return this.httpClient.patch(url, details);
      }

}