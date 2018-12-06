import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";

const profileRoutes: Routes = [
    {
        // 2. PROFILE
        path: '',
        children: [
            {
                // 2. PROFILE - REDIRECIONA PARA O PERFIL PESSOAL DO USUARIO
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-profile'
            },
            {
                // 2. PROFILE/MY-PROFILE - PERFIL PESSOAL DO USUARIO
                path: 'my-profile',
                component: ProfileComponent
            },
            {
                // 2. PROFILE/SETTINGS - REDIRECIONA PARA AS CONFIGURAÇÕES DO PERFIL
                path: 'my-profile/settings',
                component: ProfileSettingsComponent
            },
            {
                // 2. PROFILE/NOMEDEUSUARIO - REDIRECIONA PARA O PERFIL DE OUTRO USUARIO
                path: ':userName',
                component: ProfileComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(profileRoutes) ],
    exports: [ RouterModule ]
})

export class ProfileRoutingModule{}