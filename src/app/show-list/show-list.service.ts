import { Injectable } from "@angular/core";
import { data } from "./show-list.data";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShowListService {

    getShows(): Observable<any[]> {
        const shows = data.map(item => item.show);
        return Observable.create(observer => {
            observer.next(shows);
            observer.complete();
        });
    }
}