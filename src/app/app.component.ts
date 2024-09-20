import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'gradients_animated_background';
  // interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
  interBubble!: HTMLDivElement;
  curX: number = 0;
  curY: number = 0;
  tgX: number = 0;
  tgY: number = 0;

  ngOnInit(): void {
    this.interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    this.move();
  }
  move() {
    this.curX += (this.tgX - this.curX) / 20;
    this.curY += (this.tgY - this.curY) / 20;
    this.interBubble.style.transform = `translate(${Math.round(
      this.curX
    )}px, ${Math.round(this.curY)}px)`;
    requestAnimationFrame(() => {
      this.move();
    });
  }

  // window.addEventListener('mousemove', (event) => {
  //     this.tgX = event.clientX;
  //     this.tgY = event.clientY;
  // });
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.tgX = event.clientX;
    this.tgY = event.clientY;
  }
}
