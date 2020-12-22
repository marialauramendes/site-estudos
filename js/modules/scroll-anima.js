export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // o bind é necessario neste caso porque this.checkDistance é uma funcao de callback dentro de uma classe, e o this é por padrao o objeto window.
    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a distancia de cada item em relacao ao topo do site
  getDistance(){
    this.distance = [...this.sections].map((section) =>{
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distancia de cada objeto em relacao oa scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }


  init(){
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event scroll
  stop(){
    window.removeEventListener('scroll', this.checkDistance);

  }
}
