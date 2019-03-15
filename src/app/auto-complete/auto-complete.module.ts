import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { InMemDataService } from '../DB/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteService } from './auto-complete.service';
import { AutoCompleteController } from './auto-complete.controller';

@NgModule({
    declarations: [AutoCompleteController],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        HttpClientInMemoryWebApiModule.forRoot(
                InMemDataService, { dataEncapsulation: false, delay: 1000 }
          )
    ],
    exports: [AutoCompleteController],
    bootstrap: [],
    providers: [AutoCompleteService]
})
export class AutoCompleteModule {}





