import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BriefingsComponent } from './briefings/briefings.component';
import { MainContentComponent } from './main-content/main-content.component';
// import { NytArticlesService} from './nyt-articles.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BriefingsComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
