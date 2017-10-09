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
import { EditorPage } from '../pages/editor/editor';
import { SkateProvider } from '../providers/skate/skate';
import { EditorGalleryModalPage } from '../pages/editor/editor-gallery-modal';
import { ModalContentPage } from '../pages/tour/pages';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    TourPage,
    UploadPage,
    EditorPage,
    EditorGalleryModalPage,
    ModalContentPage
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
    UploadPage,
    EditorPage,
    EditorGalleryModalPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SkateProvider
  ]
})
export class AppModule {}
