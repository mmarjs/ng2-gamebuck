import {Component, OnInit, ViewChild  } from '@angular/core'
//import { DialogService } from "ng2-bootstrap-modal";

import { Router, ActivatedRoute } from '@angular/router';
import { Contest } from '../../models/contest'
import { ContestService } from '../../services/contest.service';

@Component({
    selector:'lobby',
    templateUrl:'./lobby.component.html',
})

export class LobbyComponent implements OnInit{
    loggedIn:boolean = false;
    contests:Contest[];
    model:any = {}
   constructor(//private dialogService:DialogService,
               private router: Router,
               private contestService:ContestService) {}

    ngOnInit() {
         this.contestService.getContests()
            .subscribe(
                data => {
                    this.contests = <Contest[]>data.response;
                    this.model.success_msg = "OK";
                },
                error => {
                    this.model.err_msg="BAD";
                });
    }

    register(uuid:string)
    {
        this.contestService.registerToContest(uuid)
            .subscribe(
                data => {
                    this.model.success_msg = "OK";
                },
                error => {
                    this.model.err_msg="BAD";
                });
    }
}