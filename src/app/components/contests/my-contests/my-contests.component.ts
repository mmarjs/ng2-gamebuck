import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';
import { Contest } from '../../../models/contest'
import { ContestService } from '../../../services/contest.service';

@Component({
    selector:'my-contests',
    templateUrl:'./my-contests.component.html',
})

export class MyContestsComponent implements OnInit{
    loggedIn:boolean = false;
    contests:Contest[];
    model:any = {}
   constructor(private contestService:ContestService,
               private router: Router) {}

    ngOnInit() {
         this.contestService.getUserContests()
            .subscribe(
                data => {
                    this.contests = <Contest[]>data.response;
                    this.model.success_msg = "OK";
                },
                error => {
                    this.model.err_msg="BAD";
                });
    }
}