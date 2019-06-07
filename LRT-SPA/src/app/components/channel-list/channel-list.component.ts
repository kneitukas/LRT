import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-channel-list",
  templateUrl: "./channel-list.component.html",
  styleUrls: ["./channel-list.component.scss"]
})
export class ChannelListComponent implements OnInit {
  channels;

  constructor(private router: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.channels = data.channels;
      // fetching data from api every minute
      setInterval(() => this.fetchData(), 1000 * 60);
    });
  }

  fetchData() {
    this.api.getChannels().subscribe(data => {
      this.channels = data;
    },

    (err) => console.log(err));
  }
}
