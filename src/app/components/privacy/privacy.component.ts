import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'privacy',
    templateUrl:'./privacy.component.html',
})

export class PrivacyComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}