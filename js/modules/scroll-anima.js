export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // o bind é necessario neste caso porque this.animaScroll é um callback, e quando callback o this é por padrao o objeto window.
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init(){
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }

}
