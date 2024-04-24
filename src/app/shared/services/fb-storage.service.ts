import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FbStorageService {

  constructor(private storage: Storage) { }

  async getFireStorageImage(imagePath: string): Promise<string> {
    const imageRef = ref(this.storage, imagePath);
    return await getDownloadURL(imageRef);
  }
}
