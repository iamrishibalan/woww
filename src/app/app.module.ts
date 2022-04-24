import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import * as $ from 'jquery';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { PdfViewerService } from './apiservice/pdf-viewer.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx';


// import { GooglePlus } from '@ionic-native/google-plus';
//import { ToastrModule } from 'ngx-toastr';
// import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Downloader, StatusBar,
    HTTP, HttpClientModule, SocialSharing,FileOpener,Zip, GooglePlus,Dialogs,File, Network,FileTransfer,PdfViewerService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
