import {Component, OnInit, ViewChild  } from '@angular/core'
//import { DialogService } from "ng2-bootstrap-modal";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'my-lineups',
    templateUrl:'./my-lineups.component.html',
})

export class MyLineupsComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(//private dialogService:DialogService,
               private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}