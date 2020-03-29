import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { WisdomComponent } from './Components/wisdom/wisdom.component';


const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'blogs',component: BlogsComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'wisdom', component: WisdomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
