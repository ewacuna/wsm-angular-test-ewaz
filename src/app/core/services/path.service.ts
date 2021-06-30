import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  constructor() {}

  assetsImgPath(imgName: string, directory?: string) {
    if (directory) {
      return `assets/${directory}/${imgName}`;
    } else {
      return `assets/${imgName}`;
    }
  }
}
