
import { Injectable } from '@angular/core';
import { Data } from './data';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  step = 1;
  private data: Data[] = [];
  private currentIndex = 0;

  getData(): Data[] {
    return this.data;
  }

  setData(newData: Data[]): void {
    this.data = newData;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

  getNextIndex(): number {
    return this.currentIndex < this.data.length - 1 ? this.currentIndex + 1 : 0;
  }

  getPreviousIndex(): number {
    return this.currentIndex > 0 ? this.currentIndex - 1 : this.data.length - 1;
  }
}
