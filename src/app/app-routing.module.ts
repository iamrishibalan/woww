import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ModalPage } from './modal/modal.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./getstart/getstart.module').then( m => m.GetstartPageModule)
  // },
  {
    path: 'getstart',
    loadChildren: () => import('./getstart/getstart.module').then( m => m.GetstartPageModule)
  },
  {
    path: 'helpvideo',
    loadChildren: () => import('./helpvideo/helpvideo.module').then( m => m.HelpvideoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'newwebinar',
    loadChildren: () => import('./newwebinar/newwebinar.module').then( m => m.NewwebinarPageModule)
  },
  {
    path: 'createwebinar',
    loadChildren: () => import('./createwebinar/createwebinar.module').then( m => m.CreatewebinarPageModule)
  },
  {
    path: 'mywebinar',
    loadChildren: () => import('./mywebinar/mywebinar.module').then( m => m.MywebinarPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'expand',
    loadChildren: () => import('./expand/expand.module').then( m => m.ExpandPageModule)
  },
  {
    path: 'collapse',
    loadChildren: () => import('./collapse/collapse.module').then( m => m.CollapsePageModule)
  },
  {
    path: 'webinarselect',
    loadChildren: () => import('./webinarselect/webinarselect.module').then( m => m.WebinarselectPageModule)
  },
  {
    path: 'fotter',
    loadChildren: () => import('./fotter/fotter.module').then( m => m.FotterPageModule)
  },
  {
    path: 'personal-detaills',
    loadChildren: () => import('./personal-detaills/personal-detaills.module').then( m => m.PersonalDetaillsPageModule)
  },
  {
    path: 'myactivities',
    loadChildren: () => import('./myactivities/myactivities.module').then( m => m.MyactivitiesPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'admin-welcome',
    loadChildren: () => import('./admin-welcome/admin-welcome.module').then( m => m.AdminWelcomePageModule)
  },
  {
    path: 'admin-profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-records',
    loadChildren: () => import('./admin-records/admin-records.module').then( m => m.AdminRecordsPageModule)
  },
  {
    path: 'admin-webinar',
    loadChildren: () => import('./admin-webinar/admin-webinar.module').then( m => m.AdminWebinarPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'webinaruser',
    loadChildren: () => import('./webinaruser/webinaruser.module').then( m => m.WebinaruserPageModule)
  },
  {
    path: 'logs',
    loadChildren: () => import('./logs/logs.module').then( m => m.LogsPageModule)
  },
  {
    path: 'feedback-admin',
    loadChildren: () => import('./feedback-admin/feedback-admin.module').then( m => m.FeedbackAdminPageModule)
  },
  {
    path: 'forgotpassword-otp',
    loadChildren: () => import('./forgotpassword-otp/forgotpassword-otp.module').then( m => m.ForgotpasswordOtpPageModule)
  },
  {
    path: 'fp-resetpassword',
    loadChildren: () => import('./fp-resetpassword/fp-resetpassword.module').then( m => m.FpResetpasswordPageModule)
  },
  {
    path: 'wheel-intro',
    loadChildren: () => import('./wheel-intro/wheel-intro.module').then( m => m.WheelIntroPageModule)
  },
  {
    path: 'macrohelp',
    loadChildren: () => import('./macrohelp/macrohelp.module').then( m => m.MacrohelpPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'offline',
    loadChildren: () => import('./offline/offline.module').then( m => m.OfflinePageModule)
  },


 
 
];

@NgModule({
  imports: [
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, })
  ],
  declarations: [ModalPage],
  exports: [RouterModule],
  entryComponents: [ModalPage]
})
export class AppRoutingModule {}



