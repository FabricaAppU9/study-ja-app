import { NgModule } from "@angular/core";


/* 
    Import dos Modulos do projeto
*/
import { AdminRoutesModule } from "./admin.routing.module";

/* 
    Import dos Components do projeto
*/
import { DashboardComponent } from './dashboard/dashboard.component';
//import { SigninComponent } from './signin/signin.component';
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { AdminComponent } from "./admin.component";


@NgModule({
    imports: [
        AdminRoutesModule
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        //SigninComponent,
        PostsComponent,
        UsersComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
            
    ],
    providers:[
        
    ]
})

export class AdminModule {

}