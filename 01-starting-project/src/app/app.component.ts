import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { songs_list } from './songs-list';
import { PlaylistComponent } from "./playlist/playlist.component";
import { SongComponent } from "./song/song.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PlaylistComponent, SongComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = songs_list;
}
