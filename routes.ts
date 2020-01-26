import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { UserListComponent } from 'src/app/users/user-list/user-list.component';
import { LikesComponent } from 'src/app/likes/likes.component';
import { MessagesComponent } from 'src/app/messages/messages.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'uzytkownicy', component: UserListComponent},
    { path: 'polubienia', component: LikesComponent},
    { path: 'wiadomosci', component: MessagesComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
]