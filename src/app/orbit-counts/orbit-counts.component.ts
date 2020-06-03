import { Component, OnInit, Input } from '@angular/core';
import { Satellite }from "../satellite"

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit(): void {
  }

  filter(arr: Satellite[], type: string): Satellite[] {
    return arr.filter(item => item.type.toLowerCase() === type.toLowerCase())
  }

}
