import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { UserListComponent } from 'src/app/users/user-list/user-list.component';
import { LikesComponent } from 'src/app/likes/likes.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { UserDetailComponent } from 'src/app/users/user-detail/user-detail.component';
import { UserDetailResolver } from 'src/app/_resolvers/user-detail.resolver';
import { UserListlResolver } from 'src/app/_resolvers/user-list.resolver';
import { UserEditComponent } from 'src/app/users/user-edit/user-edit.component';
import { UserEditResolver } from 'src/app/_resolvers/user-edit.resolver';
import { PreventUnsavesChanges } from 'src/app/_guards/prevent-unsaves-changes.guard';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'uzytkownicy', component: UserListComponent, resolve: {users: UserListlResolver}},
            { path: 'uzytkownicy/:id', component: UserDetailComponent, resolve: {user: UserDetailResolver}},
            { path: 'uzytkownik/edycja', component: UserEditComponent,
                                    resolve: {user: UserEditResolver},
                                    canDeactivate: [PreventUnsavesChanges]},
            { path: 'polubienia', component: LikesComponent},
            { path: 'wiadomosci', component: MessagesComponent},
        ]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
