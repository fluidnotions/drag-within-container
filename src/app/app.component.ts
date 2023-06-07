import { Component, Renderer2, ElementRef } from '@angular/core';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="addDraggableComponent()">Add component</button>
    <div class="container">
      <!-- Our dynamically added components will be here -->
    </div>
  `,
  styles: [`
    .container {
      width: 100%;
      height: 100%;
      position: relative;
    }
  `]
})
export class AppComponent {
  constructor(private componentService: ComponentService, private renderer: Renderer2, private el: ElementRef) {}

  addDraggableComponent() {
    const componentRef = this.componentService.addComponent();
    this.renderer.appendChild(this.el.nativeElement, componentRef.location.nativeElement);
  }
}
