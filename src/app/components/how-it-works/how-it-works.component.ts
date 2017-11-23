import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'how-it-works',
    templateUrl:'./how-it-works.component.html',
})

export class HowItWorksComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}