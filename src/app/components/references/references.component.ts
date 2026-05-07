import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReferenceCategory {
  title: string;
  icon: string;
  items: string[];
}

interface DetailedProject {
  title: string;
  details: string;
  image: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  detailedProjects: DetailedProject[] = [
    { title: 'Altengerechtes Wohnen in Malchin', details: '22 WE - Heizung mit Brennwertgaskessel - Sanitär (barrierefrei)', image: 'assets/referenzen/22we.jpg' },
    { title: 'Sporthalle „Am Klosterberg“ in Altentreptow', details: 'Lüftung der Halle – Lüftung des Funktionsgebäudes (Außengerät)', image: 'assets/referenzen/sporthalle.jpg' },
    { title: 'Pestalozzischule Malchin', details: 'Komplexe Sanierung – Heizung mit Radiatoren – Sanitär', image: 'assets/referenzen/pestalozzischule.jpg' },
    { title: 'Fernheizleitung', details: 'Referenz – Fernheizleitung', image: 'assets/referenzen/fernheizleitung.jpg' }
  ];

  categories: ReferenceCategory[] = [
    {
      title: 'Heizungs- und Klimaanlagen',
      icon: '🌡️',
      items: [
        'Schule Malchin',
        'Schule Gielow',
        'Kreisarchiv Demmin',
        'KGS',
        'Rathaus Altentreptow',
        'Sporthalle Wustrow'
      ]
    },
    {
      title: 'Lüftungsanlagen',
      icon: '💨',
      items: [
        'Berufsschule Demmin',
        'Berufsschule Neubrandenburg',
        'THW Gebäude Demmin',
        'Rettungswache Jarmen'
      ]
    },
    {
      title: 'Sanitär- und Schwimmbadtechnik',
      icon: '💧',
      items: [
        'Asylbewerberheim Jürgensdorf',
        'Schule Neukalen',
        'Realschule Altentreptow'
      ]
    },
    {
      title: 'Wärmeversorgung',
      icon: '🔥',
      items: [
        'WDG mbH Altentreptow',
        'Wohngebiet Altentreptow',
        'Diakonie Weitin',
        'Fernheizleitung Altentreptow'
      ]
    }
  ];
}
