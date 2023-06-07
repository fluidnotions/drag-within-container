import { Component } from '@angular/core';

@Component({
  selector: 'app-draggable',
  template: `
    <div class="example-box" cdkDrag>
      <h1>Draggable Component {{number}}</h1> 
      <div class="content">{{content}}</div>
    </div>
  `,
  styles: [`
    .example-box {
      width: 200px;
      height: 200px;
      border: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      cursor: move;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #fff;
      border-radius: 4px;
      position: relative;
      z-index: 1;
      transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
    .content{
      text-weight: bold;
      font-size: 1rem;
    }
    h1{
      font-size: 1.5rem;
    }
  `]
})
export class DraggableComponent {
  number: number | undefined;
  content: string | undefined;
  constructor() { }
}
