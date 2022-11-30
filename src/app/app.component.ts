import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Cristian';
  age= 25;
  img= 'https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg';
  btnDisable= true;
  persona= {
    name: 'Cristian',
    age: 18,
    avatar: 'https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg'
  }

  toggleButton() {
    this.btnDisable= !this.btnDisable;
  }

  increaseAge() {
    this.persona.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }
}
