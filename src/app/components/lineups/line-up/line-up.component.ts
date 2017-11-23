import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'line-up',
    templateUrl:'./line-up.component.html',
})

export class LineupComponent implements OnInit{
    loggedIn:boolean = false;
    lineupId:string;
   constructor(//private dialogService:DialogService,
               private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
         this.route.params.subscribe(params => {
            this.lineupId = params['id'];
         });
    }
}