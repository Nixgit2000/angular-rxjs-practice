import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new Subject<string>()

  data$: Observable<string> = this.data.asObservable()

  updateData(data: string){
    this.data.next(data)
  }

}
