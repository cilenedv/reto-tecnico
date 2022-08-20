import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent },

    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard'}

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
