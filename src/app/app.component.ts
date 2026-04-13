import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gand-piesa-zi';
  thought = "Stay consistent, even when it's hard.";
  musicUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
