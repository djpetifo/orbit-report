import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor(){
    this.displayList = [];
    this.sourceList = [];
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesURL).then(function(response){
      response.json().then(function(data){

        let fetchedSatellites = data.satellites;
        for(let satellite of fetchedSatellites){
          let temp = new Satellite(satellite.name, satellite.type, satellite.launchDate, satellite.orbitType, satellite.operational);
          this.sourceList.push(temp);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if(name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    this.displayList = matchingSatellites;
  }
}
