import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchFilterPipe } from './search-filter.pipe';
import{FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
   FormsModule 
  ],
  declarations: [DashboardComponent, SearchFilterPipe],
  exports: [DashboardComponent,FormsModule,SearchFilterPipe]
})
export class DashboardModule { }
