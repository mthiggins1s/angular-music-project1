import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) cover!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/album-cover/' + this.cover;
  }

  onSelectSong() {}
}
