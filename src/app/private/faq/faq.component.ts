import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';
import { GetFaqService } from './getfaq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs;

  constructor(private title: TitleService, private getFaq: GetFaqService) { }

  ngOnInit() {
    // sets the title to FAQ's
    this.title.title = "FAQ's";
    //gets all the FAQ's
    this.getFaq.FAQs().subscribe(response=>{
      this.faqs = response;
    })
  }

}
