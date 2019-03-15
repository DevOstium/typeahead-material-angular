import { OnInit, Component } from '@angular/core';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { User } from './User.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AutoCompleteService } from './auto-complete.service';

@Component({
    selector     : 'auto-complete',
    templateUrl  : './auto-complete.view.html',
    styleUrls    : ['auto-complete.css']
})
export class AutoCompleteController implements OnInit {

    filteredUsers  : User[] = [];
    usersForm      : FormGroup;
    isLoading      = false;
    
    constructor (  private fb                   : FormBuilder, 
                   private autoCompleteService  : AutoCompleteService 
                ) {}
  
    ngOnInit() {
      this.usersForm = this.fb.group({ userInput: null  })
  
      console.log( this.usersForm.get('userInput').valueChanges.subscribe( x => console.log("digitando :" + x) ) )

        this.usersForm
            .get('userInput')
            .valueChanges
                        .pipe(
                              debounceTime (300),
                              tap ( () => this.isLoading = true ),
                              switchMap ( value => this.autoCompleteService
                                                                         .search ( { name: value }, 1 )
                                                                         .pipe   ( finalize ( () => this.isLoading = false ) )
                                        )
                              )
                        .subscribe( users => this.filteredUsers = users.results );
    }
  
    displayFn(user: User) {
      if (user) { return user.name; }
    }

}