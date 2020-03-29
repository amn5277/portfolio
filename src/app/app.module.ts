import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { WisdomComponent } from './Components/wisdom/wisdom.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogsComponent,
    ProjectsComponent,
    WisdomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
