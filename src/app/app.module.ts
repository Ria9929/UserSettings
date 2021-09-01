import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRouterModule } from './app-router/app-router.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     MatButtonModule,
     AppRouterModule,
     MatCardModule,
     MatFormFieldModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     MatInputModule
  ],
  declarations: [ 
    AppComponent, 
    UserSettingComponent,
    EditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
