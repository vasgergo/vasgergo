import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"vasgergo-b3370","appId":"1:657290616852:web:e7b0e0f8fad9118dfe0701","storageBucket":"vasgergo-b3370.appspot.com","apiKey":'${{ secrets.FIREAPIKEY }}',"authDomain":"vasgergo-b3370.firebaseapp.com","messagingSenderId":"657290616852","measurementId":"G-7T4QF91JBB"})),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
