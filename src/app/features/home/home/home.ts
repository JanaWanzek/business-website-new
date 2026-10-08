import { Component } from '@angular/core';

import { Hero } from '../components/hero/hero';
import { ServicesPreview } from '../components/services-preview/services-preview';
import { About } from '../components/about/about';
import { Testimonials } from '../components/testimonials/testimonials';
import { Gift } from '../../../../features/home/component/gift/gift';
import { Faq } from '../components/faq/faq';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ServicesPreview,
    About,
    Testimonials,
    Faq
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}