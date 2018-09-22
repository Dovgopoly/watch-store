import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../../../interfaces/hotels.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  public info: Info;

  public constructor() { }

  public ngOnInit(): void {
  }

}
