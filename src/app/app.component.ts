import {Component} from '@angular/core';
import {FbStorageService} from "./shared/services/fb-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vasgergo';
  ppSrc: string | undefined;

  constructor(fbStorageService: FbStorageService) {

    fbStorageService.getFireStorageImage('pp.jpg').then((url) => {
      this.ppSrc = url;
    });

  }

}
