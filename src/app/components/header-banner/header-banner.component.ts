import {Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'header-banner',
    templateUrl:'./header-banner.component.html'
})

export class HeaderBannerComponent implements OnInit
{
    userName:string;
    imageUrl:string;

    constructor(private router: Router)
    {

    }

    ngOnInit()
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userName=currentUser.userName;
        this.imageUrl="http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/dak.jpg";
    }

    signOut()
    {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/home']);
    }
}
