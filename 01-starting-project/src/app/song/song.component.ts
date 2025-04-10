import { Component, computed, input, Output, EventEmitter } from '@angular/core';

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

  @Output() songSelected = new EventEmitter<void>();

  onSelectSong() {
    this.songSelected.emit();
  }
}
