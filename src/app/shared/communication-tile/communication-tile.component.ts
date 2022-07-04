import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';


export function changeUrlIntoEmbeb(url:string) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
      return match[2];
  } else {
      return url;
  }
}
@Component({
  selector: 'f2ml-communication-tile',
  templateUrl: './communication-tile.component.html',
  styleUrls: ['./communication-tile.component.scss']
})
export class CommunicationTileComponent implements OnInit {
  @Input() centered: boolean = true;

  public communicationTitle: string = "Bénéficiez d'un service lavage éco responsable sur le lieu de votre choix";
  public communicationContentfield_description = "Bénéficier d'un lavage écoresponsable, (sans eau ni déchets, avec utilisation de produits biodégradables) et la possibilité d’une désinfection accompagnée d'un contrôle visuel des points de sécurité* et d’aspect du véhicule.";
  public communicationContentButtonTitle: string = "Download pdf";
  public currentUrl;
  constructor(private sanitizer: DomSanitizer, public deviceDetector: DeviceDetectorService) {
    let embedUrl = changeUrlIntoEmbeb("https://www.youtube.com/watch?v=_tHM9Q_-Nwg");
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embedUrl}`);
  }

  ngOnInit(): void {

  }

}
