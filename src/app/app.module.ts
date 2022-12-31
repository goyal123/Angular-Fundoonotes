import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ResetpasswdComponent } from './Components/resetpasswd/resetpasswd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidenavComponent } from './sidenav/sidenav.component'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NoteiconsComponent } from './noteicons/noteicons.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallnotesComponent } from './getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './displaynotes/displaynotes.component'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { UpdatenotesComponent } from './updatenotes/updatenotes.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { TrashComponent } from './trash/trash.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotemailComponent,
    ResetpasswdComponent,
    HeaderComponent,
    SidenavComponent,
    NoteiconsComponent,
    CreatenoteComponent,
    DashboardComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    UpdatenotesComponent,
    ArchieveComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
