import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


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
import { UsersListComponent } from "./users/users-list/users-list.component";
import { PostsModule } from "./posts/posts.module";
import { BreadcrumbComponent } from "./shared/components/breadcrumb/breadcrumb.component";


@NgModule({
    imports: [
        CommonModule,
        AdminRoutesModule,
        PostsModule
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        PostsComponent,
        UsersComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    exports: [
            
    ],
    providers:[
        
    ]
})

export class AdminModule {

}