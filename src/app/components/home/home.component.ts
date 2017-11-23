import {Component, OnInit, ViewChild  } from '@angular/core'

import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
})

export class HomeComponent implements OnInit{
    loggedIn:boolean = false;

 //   @ViewChild(LoginComponent) loginComponent:LoginComponent;
   constructor(private modalService: NgbModal,
               private router: Router) {}

    ngOnInit() {
        //this.loggedIn = false;
    }

    showRegisterComponent() {
        //this.dialogService.addDialog(RegisterComponent,  { message:'Click outside to close dialog' }, { closeByClickingOutside:true });
       this.modalService.open(RegisterComponent);
  }

  showLoginComponent(){
        //var options = {closeByClickingOutside: true};

        //this.dialogService.addDialog(LoginComponent, { message:'Click outside to close dialog' }, { closeByClickingOutside:true });
        const modalRef = this.modalService.open(LoginComponent);
  }
}