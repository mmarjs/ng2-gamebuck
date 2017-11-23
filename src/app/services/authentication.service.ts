import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    isLoggedIn:boolean;
    redirectUrl:string;
    constructor(private http: Http) { }

    userLogged()
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser?true:false;
    }
    login(username: string, password: string) {
        
        var authdata = btoa(username + ':' + password);
        let headers = new Headers({'Content-Type': 'application/json'});  
        headers.append('Authorization','Basic ' + authdata)
        let options = new RequestOptions({headers: headers});
        this.isLoggedIn = true;
        return this.http.post('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/login', null, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let restResponse = response.json();
                let user = restResponse.response;
                user.username=username;
                user.password=password;
                
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
    }
}