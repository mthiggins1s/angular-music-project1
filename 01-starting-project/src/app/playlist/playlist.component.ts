import { Component, signal } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { CommonModule } from '@angular/common';
import { songs_list } from '../songs-list';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [SongComponent, CommonModule],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  selectedSong = signal<{ cover: string, name: string } | null>(null);

  songs = songs_list;

  onSelect(song: { name: string, cover: string }) {
    this.selectedSong.set(song);
  }

  onClosePlayer() {
    this.selectedSong.set(null);
  }
}
