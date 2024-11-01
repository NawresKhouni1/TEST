import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart'; 
import { ProgressBarModule } from 'primeng/progressbar';
import { ListComponent } from './components/list/list.component'; 
import { ListboxModule } from 'primeng/listbox'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TokenComponent } from './components/token/token.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    TokenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    ChartModule,
    ProgressBarModule,
    ListboxModule,
    DropdownModule,
    DataViewModule,
    FormsModule,
    TableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
