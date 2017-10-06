import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage} from '../pages/gallery/gallery';
import { TourPage} from '../pages/tour/tour';
import { UploadPage} from '../pages/upload/upload';
import { SkateProvider } from '../providers/skate/skate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    TourPage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    TourPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SkateProvider
  ]
})
export class AppModule {}
