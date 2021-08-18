import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetAllHouseComponent } from './components/get-all-house/get-all-house.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'  
import { MatCardModule, MatDividerModule, MatFormField, MatFormFieldModule, MatIconModule, MatInput, MatInputModule, MatListOption, MatNativeDateModule, MatOptionModule, MatPaginator, MatPaginatorModule, MatSidenav, MatSidenavModule, MatSortModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterSearchPipe } from './pipeFilter/filter-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GetAllHouseComponent,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
