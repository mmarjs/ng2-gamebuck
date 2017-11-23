import {Component, OnInit, ViewChild  } from '@angular/core'
//import { DialogService } from "ng2-bootstrap-modal";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'strategy',
    templateUrl:'./strategy.component.html',
})

export class StrategyComponent implements OnInit{
    loggedIn:boolean = false;

   constructor(//private dialogService:DialogService,
               private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }
}