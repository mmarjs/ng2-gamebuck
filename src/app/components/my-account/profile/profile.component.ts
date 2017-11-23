import {Component, OnInit} from '@angular/core'
import { UserService } from '../../../services/user.service';
import {User} from '../../../models/user'

@Component({
    selector:'profile',
    templateUrl:'./profile.component.html'
})

export class ProfileComponent implements OnInit
{
    model:any={};
    test:string;
    user:User = new User();

    constructor(private userservice: UserService)
    {
         
    }

    ngOnInit()
    {
       this.userservice.getCurrentUser()
            .subscribe(
                data => {
                    this.user = <User>data.response[0];
                    this.user.image="http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/dak.jpg";
                    
                },
                error => {
                    this.model.err_msg="BAD";
                });
    }

    updateUserInfo()
    {
        this.userservice.updateUserInfo(this.user)
            .subscribe(
                data => {
                    this.model.success_personal="Successfully updated personal info.";
                },
                error => {
                    this.model.err_personal="Error while trying to update personal info.";
                });
    }

    updateSocialInfo()
    {
        this.userservice.updateUserSocialInfo(this.user)
            .subscribe(
                data => {
                    this.model.success_social="Successfully updated social networks info.";
                },
                error => {
                    this.model.error_social="Error while trying to update social networks info.";
                });
    }

    updateNewPassword()
    {
        if (this.user.password && this.user.confirmPassword)
        {
            if (this.user.password.length > 0 && this.user.confirmPassword.length > 0)
            {
                if (this.user.password === this.user.confirmPassword)
                {
                    this.userservice.updateUserPassword(this.user)
                        .subscribe(
                            data => {
                                this.model.success_password="Successfully updated password.";
                                let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                                currentUser.password=this.user.password;
                                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                            },
                            error => {
                                this.model.error_password="Error while trying to update password.";
                            });
                }
                else
                {
                    this.model.error_password="Error while updating password. Passwords do not match";
                }
            }
            else
            {
                this.model.error_password="Error while updating password. Passwords length must be higher then 6.";
            }
        }
        else
        {
            this.model.error_password="Error while updating password. Passwords length must be higher then 6.";
        }
        this.user.password="";
        this.user.confirmPassword="";
    }

    uploadImage(event:any)
    {
        console.log('onChange');
        var files = event.srcElement.files;
        console.log(files);
       // this.userservice.uploadImage('http://localhost:8182/upload', [], files).subscribe(() => {
        //console.log('sent');
        //});
    }
}
