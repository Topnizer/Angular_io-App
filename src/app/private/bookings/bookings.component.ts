import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';
import { GetBookingsService } from './getbookings.service';
import { CountBookingService } from 'src/app/shared/countbooking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  upcoming: boolean = true;
  upcomingBooking: any;
  pastBooking: any;

  constructor(private title: TitleService, private getBookings: GetBookingsService, private countbooking: CountBookingService) {
    
   }
   //function that sets the flag to show the upcoming bookings
   showUpcoming(){
     this.upcoming = true;
   }
    //function that sets the flag to show the past bookings
   showPast(){
     this.upcoming = false;
   }

  ngOnInit() {
    // sets the title to MY BOOKINGS
    this.title.title = "MY BOOKINGS";
    this.getBookings.upcomingBookings().subscribe(x=>{
      this.upcomingBooking = x[0].Upcoming;
    this.getBookings.pastBookings().subscribe(x=>{
      this.pastBooking = x[0].Past;
      //sets the count of the bookings
     this.countbooking.count=this.upcomingBooking.length + this.pastBooking.length;
    })
    })
  }


}
