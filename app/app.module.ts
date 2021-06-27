import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAQYEpGuyRW8hb3ryKXv6-gCc1A-75e8aU",
      authDomain: "fir-auth-login1999.firebaseapp.com",
      projectId: "fir-auth-login1999",
      storageBucket: "fir-auth-login1999.appspot.com",
      messagingSenderId: "738372882433",
      appId: "1:738372882433:web:0d3cb3ebded32acfadb000"
    }),
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
