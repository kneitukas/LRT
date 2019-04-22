import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],

})
export class ChannelListComponent implements OnInit, AfterViewInit {
  channels;
  logos = [
    "lrt-televizija.png",
    "lrt-plius.png",
    "lrt-lituanica.png",
    "lrt-radijas.png",
    "lrt-klasika.png",
    "lrt-opus.png",
  ]
  constructor (private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.data.subscribe(
      data => {
    this.channels = data.channels;
      }
    )
  }

  ngAfterViewInit () {
  }
}
