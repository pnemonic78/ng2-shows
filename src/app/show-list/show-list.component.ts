import { Component } from "@angular/core";
import { ShowListService } from "./show-list.service"

@Component({
  selector: 'app-show-list',
  templateUrl: 'show-list.component.html',
  styleUrls: ['show-list.component.scss']
})
export class ShowListComponent {
  shows: any[];

  constructor(private service: ShowListService) {
    service.getShows().subscribe(shows => this.shows = shows);
  }

  navigate(show) {
      console.log(`selected show: ${show.name}`);
  }

}
