import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RlTagInputModule } from 'angular2-tag-input';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage} from '../pages/gallery/gallery';
import { TourPage} from '../pages/tour/tour';
import { UploadPage} from '../pages/upload/upload';
import { EditorPage } from '../pages/editor/editor';
import { SkateProvider } from '../providers/skate/skate';
import { EditorGalleryModalPage } from '../pages/editor/editor-gallery-modal';
import { ModalContentPage } from '../pages/tour/pages';
import { TagsPage} from '../pages/tags/tags';
import { EditorLandingModalPage } from '../pages/editor/editor-landing-modal';
import { AuthProvider } from '../providers/auth/auth';
import { MapPage } from '../pages/map/map'
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { TagsModalPage } from '../pages/tags/tags-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    TourPage,
    UploadPage,
    EditorPage,
    EditorGalleryModalPage,
    ModalContentPage,
    TagsPage,
    EditorLandingModalPage,
    MapPage,
    TabsPage,
    InfoPage,
    TagsModalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RlTagInputModule
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
    ModalContentPage,
    TagsPage,
    EditorLandingModalPage,
    MapPage,
    TabsPage,
    InfoPage,
    TagsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SkateProvider,
    AuthProvider
  ]
})
export class AppModule {}
