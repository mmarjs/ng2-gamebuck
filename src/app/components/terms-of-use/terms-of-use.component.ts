import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'terms-of-use',
    templateUrl:'./terms-of-use.component.html',
})

export class TermsOfUseComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}