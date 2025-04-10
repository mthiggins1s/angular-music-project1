import { Component, computed, input } from '@angular/core';
import { songs_list } from '../songs-list';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  cover = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/album-cover/' + this.cover();
  });

  songs = songs_list;

  onSelectSong() {}
}
