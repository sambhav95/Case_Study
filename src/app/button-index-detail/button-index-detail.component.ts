import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-index-detail',
  templateUrl: './button-index-detail.component.html',
  styleUrls: ['./button-index-detail.component.css']
})
export class ButtonIndexDetailComponent implements OnInit {
  @ViewChild('newButton') newButton:ElementRef<HTMLInputElement> = {} as ElementRef;
  constructor() { 
  }
  @HostListener("window:scroll")
  onWindowScroll() {
    var button = document.createElement('BUTTON');
    var label = document.createElement('Label')
    var br = document.createElement("br");
    var text = document.createTextNode("Click Me");
    var labels = document.createTextNode("Button:");
     var idNum=Math.floor((Math.random()*20))+25;
    button.appendChild(text);
    label.appendChild(labels);
    this.newButton.nativeElement.style.height = '200px';
    this.newButton.nativeElement.style.width = '200px';
    button.setAttribute('id',idNum.toString());
    label.style.display='inline-block';
    label.style.fontSize = '20px';
    label.style.paddingTop = '20px';
    button.style.display='inline-block';
    button.style.marginLeft='30px';
    button.classList.add('btn','btn-secondary');
    button.style.marginLeft = '30px';
    button.addEventListener('click',this.newClickButton.bind(this));
    this.newButton.nativeElement.appendChild(label);
    this.newButton.nativeElement.appendChild(button);
    this.newButton.nativeElement.appendChild(br);
  }

  numbers:any =[]
  ngOnInit(): void {
    for(let i =0;i<=20;i++){
      this.numbers.push(i);
    }
  }
  clickbutton(index:any){
    window.alert(index);
  }
  newClickButton(value:any){
    window.alert(value.target.id);
    
  }

}
