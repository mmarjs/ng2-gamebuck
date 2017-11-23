import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'legality',
    templateUrl:'./legality.component.html',
})

export class LegalityComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}