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
  selectedSong = signal<Song | null>(null);
  songs: Song[] = songs_list;

  onSelect(song: Song) {
    this.selectedSong.set(song);
  }

  onClosePlayer() {
    this.selectedSong.set(null);
  }
}