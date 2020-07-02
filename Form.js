class Form {

  constructor() {
    this.input = createInput("NAME");
    this.input2 = createInput("Email-Id");
    this.button = createButton('Continue');
  }
  hide(){
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("DONATE FOR A CAUSE");
    title.position(50, 0);

    this.input.position(130, 160);
    this.input2.position(130,200);
    this.button.position(170, 300);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      voter.name = this.input.value();
      voter.Emailid=this.input2.value();
      voterCount+=1;
      voter.index = voterCount;
      voter.update();
      voter.updateCount(voterCount);
    });

  }
}
