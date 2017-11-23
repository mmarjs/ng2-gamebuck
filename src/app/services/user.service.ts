import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getCurrentUser() {
        return this.http.get('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users', this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/register', user).map((response: Response) => response.json());
    }

    updateUserInfo(user: User) {
        return this.http.put('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/update', user, this.jwt()).map((response: Response) => response.json());
    }

    updateUserSocialInfo(user: User) {
        return this.http.put('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/updateSocial', user, this.jwt()).map((response: Response) => response.json());
    }

    updateUserPassword(user: User) {
        return this.http.put('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/updatePassword', user, this.jwt()).map((response: Response) => response.json());
    }

    uploadImage(user: User) {
        return this.http.put('http://ec2-52-56-167-4.eu-west-2.compute.amazonaws.com:8443/developer/api/v1.0/users/updatePassword', user, this.jwt()).map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

      //  if (currentUser && currentUser.token) {
     //       let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
     //       return new RequestOptions({ headers: headers });
      //  }

        var authdata = btoa(currentUser.userName + ':' + currentUser.password) ;
        
        let headers = new Headers({'Content-Type': 'application/json'});  
        headers.append('Authorization','Basic ' + authdata)
        return new RequestOptions({headers: headers});
    }
}