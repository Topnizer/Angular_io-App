// Service to get all the FAQ's
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetFaqService{

    constructor(private httpClient: HttpClient) { }

    FAQs(){
        return this.httpClient.get('http://localhost:3000/FAQ');
    }
}