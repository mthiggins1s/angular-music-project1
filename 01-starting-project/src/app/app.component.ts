import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SongComponent } from "./song/song.component";
import { songs_list } from './songs-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = songs_list;
}
