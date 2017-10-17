import { Component } from '@angular/core';

import { TourPage } from '../tour/tour';
import { GalleryPage } from '../gallery/gallery';
import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = TourPage;
  tab4Root = GalleryPage;

  constructor() {

  }
}
