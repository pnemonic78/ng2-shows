import { Injectable } from "@angular/core";
import { data } from "./show-list.data";

@Injectable()
export class ShowListService {

    getShows(): any {
        return data.map(item => item.show);
    }
}