import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
    constructor(){}
    /**
     * 
     */
    login(email,password):Observable<any>{
        return Observable.empty();
    }
}