import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
    'Black Widow',
    'Hawkeye',
    'Doctor Strange',
    'Black Panther',
    'Antman',
    'Wasp',
    'Captain Marvel',
    'Scarlet Witch',
  ];
  public deletedHero?: string = '';
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
