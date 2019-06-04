import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SchoolService } from './school.service';
import { CoursesService} from './courses.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule} from '@angular/forms';
import { CustPipe } from './custpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CustPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SchoolService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
