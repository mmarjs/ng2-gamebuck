import {Component, OnInit} from '@angular/core'

import {UserService} from '../../../services/user.service'
import { Router } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'register-modal',
    templateUrl:'./register.component.html'
})

export class RegisterComponent
{
  model:any={};

  constructor( public activeModal: NgbActiveModal,
              private userService: UserService,
              private router: Router) {
   
  }

  register() {
      //this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.model.err_msg="GOOD";
                    //this.close();
                },
                error => {
                    this.model.err_msg="BAD";
                    //this.alertService.error(error);
                    //this.loading = false;
                });
      
  }
}