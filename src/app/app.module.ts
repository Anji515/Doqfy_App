import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './Components/Footer/footer.component';
import { LeftComponent } from './Components/Left-component/left-box.component';
import { RightComponent } from './Components/Right-component/right-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
