import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Navigation, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  @ViewChild('animar',{read:ElementRef, static:true}) animar: ElementRef;
  

  constructor(private animationCtrl:AnimationController, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  const anim01=  this.animationCtrl
    .create()
    .addElement(this.animar.nativeElement)
    .duration(4500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');

    anim01.play();

  }

  volver(){
    this.router.navigate(['/home'])
  }

}
