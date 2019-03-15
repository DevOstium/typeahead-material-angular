import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, IUserResponse } from './User.model';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AutoCompleteService {

    constructor(private http: HttpClient) {}

    search( userModel : {name : string} = {name: ''}, page = 1 ) : Observable<IUserResponse> {
      return this.http
                    .get<IUserResponse>('/api/users')
                    .pipe(
                          tap((response: IUserResponse) => {
                                response.results = response.results
                                  .map(user => new User(user.id, user.name))
                                
                                  // Not filtering in the server since in-memory-web-api has somewhat restricted api
                                  .filter(user => user.name.includes(userModel.name))
                        
                                return response;
                          })
                      );
    }
}