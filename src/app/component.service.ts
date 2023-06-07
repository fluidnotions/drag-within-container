import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  jokes: string[] = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
  ];
  number = 0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {}

  addComponent() {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(DraggableComponent)
      .create(this.injector);

      componentRef.instance.content = this.jokes.pop() || 'No jokes left';
      componentRef.instance.number = this.number++;
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return componentRef;
  }

  removeComponent(componentRef: ComponentRef<DraggableComponent>) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}



