// Service to get all the bookings
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetBookingsService{

    constructor(private httpClient: HttpClient) { }
// function to get the upcoming bookings
    upcomingBookings(){
        return this.httpClient.get('http://localhost:3000/Bookings?id=Upcoming');
    }
// function to get the past bookings
    pastBookings(){
        return this.httpClient.get('http://localhost:3000/Bookings?id=Past');
    }
}