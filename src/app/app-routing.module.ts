import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/sign-up/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { NewsfeedComponent } from './components/user-homepage/newsfeed/newsfeed.component';
import { UpdateNameComponent } from './components/user-homepage/update-name/update-name.component';
import { UpdateAddressComponent } from './components/user-homepage/update-address/update-address.component';
import { UpdatePasswordComponent } from './components/user-homepage/update-password/update-password.component';
import { NewProfileComponent } from './components/user-homepage/new-profile/new-profile.component';
import { UserProfileComponent } from './components/user-homepage/user-profile/user-profile.component';
import { NewBusinessComponent } from './components/user-homepage/new-business/new-business.component';
import { BusinessComponent } from './components/user-homepage/business/business.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:userId', component: UserHomepageComponent,
    children: [
      {path: '', component: NewsfeedComponent},
      {path: 'updatename', component: UpdateNameComponent},
      {path: 'updateaddress', component: UpdateAddressComponent},
      {path: 'updatepassword', component: UpdatePasswordComponent},
      {path: 'newprofile', component: NewProfileComponent},
      {path: 'profile/:profileId', component: UserProfileComponent},
      {path: 'newbusiness', component: NewBusinessComponent},
      {path: 'business/:businessId', component: BusinessComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
