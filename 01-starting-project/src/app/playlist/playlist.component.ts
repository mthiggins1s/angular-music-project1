import { Component, signal } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { CommonModule } from '@angular/common';
import { Song, songs_list } from '../songs-list';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [SongComponent, CommonModule],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  // checks for a song in the array of songs_list. If a song is found, onSelect will trigger and open the panel, if no song is found, the panel will not open. The panel can be closed with the onClosePlayer function.
  selectedSong = signal<Song | null>(null);
  songs: Song[] = songs_list;

  // opens music player
  onSelect(song: Song) {
    this.selectedSong.set(song);
  }

  // closes music player via Close button
  onClosePlayer() {
    this.selectedSong.set(null);
  }
}