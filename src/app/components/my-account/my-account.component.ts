import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector:'my-account',
    templateUrl:'./my-account.component.html'
})

export class MyAccountComponent implements OnInit
{
    model:any={};
    tab : number;
    parameter:string;

    constructor( private router: Router, 
                 private route: ActivatedRoute)
    {}
    ngOnInit() {
        this.tab = 0;
         this.route.params.subscribe(params => {
            this.parameter = params['tab'];
         });
         if (this.parameter === 'faq')
         {
             this.tab = 1;
         }
         else if (this.parameter === 'how-to-play' )
         {
             this.tab = 2;
         }
         else if (this.parameter === 'help')
         {
             this.tab = 3;
         }
    }

    setTab(tabNum:number)
    {
        this.tab = tabNum;
        if (this.tab ===  0)
         {
             this.router.navigate(['my-account/profile']);
         }
         else if (this.tab === 1 )
         {
             this.router.navigate(['my-account/faq']);
         }
         else if (this.tab === 2)
         {
             this.router.navigate(['my-account/how-to-play']);
         }
         else if (this.tab === 3)
         {
             this.router.navigate(['my-account/help']);
         }
         else
         {
             this.router.navigate(['my-account/profile']);
         }
        
    }

    isSet(tabNum:number)
    {
        var is = this.tab == tabNum;
        return is;
    }

    postUserInfo()
    {

    }

    postNewPassword()
    {

    }
}
