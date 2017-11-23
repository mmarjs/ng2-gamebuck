import {Component, OnInit} from '@angular/core'

import { AuthenticationService } from '../../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'login-modal',
    templateUrl:'./login.component.html'
})

export class LoginComponent 
{
  model:any={};

  constructor(public activeModal: NgbActiveModal,
              private authenticationService: AuthenticationService,
              private router: Router) {
    
  }

  login() {
      //this.loading = true;
         this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.model.success_msg="OK";
                    this.router.navigate(['/lobby']);
                    this.activeModal.close();
                  //  this.close();
                },
                error => {
                    this.model.err_msg="BAD";
                });
      
  }
}