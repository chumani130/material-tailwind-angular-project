import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { YourComponent } from './your-component/your-component.component';
import { AppComponent } from './app/app.component'; // Import the AppComponent

@NgModule({
  declarations: [YourComponent, AppComponent], // Include both components
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Set AppComponent as the bootstrap component
})
export class AppModule {}
