import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      logo: 'adjust-circle',
      title: 'QHSE Training Awareness',
      desc: 'Pada pelayanan ini kami berfokus pada bla..'
    },
    {
      logo: 'circuit',
      title: 'Sertifikasi Kemnaker dan BNSP',
      desc: 'Kami menyediakan segala training yang anda butuhkan terkait sertfikasi Kemnaker dan BNSP ..'
    },
    {
      logo: 'fire',
      title: 'Database Alumni',
      desc: 'Database alumni dapat di akses guna memudahkan bla bla..'
    },
    //{
    //  logo: 'flower',
    //  title: 'Discussion For Idea',
   //   desc: 'The phrasal sequence of the is now so that many campaign and benefit'
   // },
   // {
    //  logo: 'shopping-basket',
   //   title: 'Increase Conversion',
   //   desc: 'The phrasal sequence of the is now so that many campaign and benefit'
   // },
   // {
    //  logo: 'flip-h',
   //   title: 'Sales Growth Idea',
   //   desc: 'The phrasal sequence of the is now so that many campaign and benefit'
   // }
  ]
}
