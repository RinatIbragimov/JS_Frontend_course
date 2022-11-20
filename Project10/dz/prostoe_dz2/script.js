class options {
  constructor (height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv () {
      var newDiv = document.createElement('div');
      newDiv.className = 'my-class';
      newDiv.id = 'my-id';
      newDiv.style.height = this.height;
      newDiv.style.width = this.width;
      newDiv.style.background = this.bg;
      newDiv.style.fontSize = this.fontSize;
      newDiv.style.textAlign = this.textAlign;
  }

}

const quad = new options("200px", "200px", "blue", "xx-large", "center");
quad.createDiv();