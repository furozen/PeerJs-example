
import { Component } from '@angular/core';
import Peer from "peerjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PeerJs-example';
  constructor(){
    let peer = new Peer();
  }
}
