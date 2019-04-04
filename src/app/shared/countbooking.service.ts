//Service to Count the number of Bookings of the user
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CountBookingService {
      count: number = 0;
  }  