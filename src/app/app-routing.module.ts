import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './Components/stories/stories.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/feed', 
        pathMatch: 'full' 
    },
    { 
        path: 'feed', 
        component: StoriesComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
