import { Component } from '@angular/core';
import { LeftSideComponent } from "./components/left-side/left-side.component";
import { FeedContenComponent } from "./components/feed-conten/feed-conten.component";
import { RightComponent } from "./components/right/right.component";

@Component({
  selector: 'app-feed',
  imports: [LeftSideComponent, FeedContenComponent, RightComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {

}
