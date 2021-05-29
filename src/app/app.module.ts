import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LoginComponent } from './components/login/login.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendemailsComponent } from './components/sendemails/sendemails.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkWeekSelectionStrategyDirective } from './directives/work-week-selection/work-week-selection-strategy.directive';
import { AdminComponent } from './components/admin/admin.component'



@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    AnalyticsComponent,
    SubmissionComponent,
    UploadComponent,
    NavbarComponent,
    SendemailsComponent,
    WorkWeekSelectionStrategyDirective,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
