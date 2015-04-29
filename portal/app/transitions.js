// import { animate, stop } from 'liquid-fire';

export default function() {
  this.setDefault({ duration: 350 });

  this.transition(
    this.toRoute('login'),
    this.use('fade')
  );

  this.transition(
    this.toRoute('profile'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('feed'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('profile'),
    this.toRoute('feed'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('feed.index'),
    this.toRoute('feed.new'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('feed.index'),
    this.toRoute('feed.detail'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
