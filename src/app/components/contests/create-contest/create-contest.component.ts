import {Component, OnInit, ViewChild  } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router';
import { Contest } from '../../../models/contest'
import { ContestService } from '../../../services/contest.service';

@Component({
    selector:'create-contest',
    templateUrl:'./create-contest.component.html',
})

export class CreateContestComponent implements OnInit{
    loggedIn:boolean = false;
    contest:Contest = new Contest();
    model:any={};
    dates:string[];
    includeGames:string[];
    dateValue:string;
    includeValue:string;

   constructor(private contestService: ContestService,
               private router: Router) {}

    ngOnInit() {
       this.dates=['Thu-Sun October 16th 1:00pm EST', 'Sun Early October 16th 1:00pm EST', 'Sun Late 16th 1:00pm EST'];
       this.includeGames=['Includes 13 NFL games (view)', 'Includes 8 NFL games (view)','Includes 5 NFL games (view)'];

       this.contest.type="H2H";
       this.contest.opponent="Anyone";
       this.contest.entryFee="10";
       this.includeValue=this.dates[0];
       this.dateValue=this.includeGames[0];
       this.contest.sport="NFL";
       this.contest.payout="20";
       this.contest.size="2";
       this.contest.numOfEntries="0";
    };

    createContest()
    {
        this.contest.description=this.dateValue;
        this.contest.name=this.includeValue;
        this.contest.payout= (+this.contest.entryFee * +this.contest.size).toString();
        this.contestService.addContest(this.contest)
            .subscribe(
                data => {
                    this.model.success_msg="Successfully created contest.";
                },
                error => {
                    this.model.error_msg="Error while trying to create contest";
                });
    }
}