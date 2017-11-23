import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'add-bucks',
    templateUrl:'./add-bucks.component.html',
})

export class AddBucksComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(
               private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}