import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'contact-us',
    templateUrl:'./contact-us.component.html',
})

export class ContactUsComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}