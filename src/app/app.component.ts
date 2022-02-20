import { Component } from '@angular/core';
import alanBtn from "@alan-ai/alan-sdk-web";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voice-interact-angular';
  alanBtnInstance;

  constructor(){
    this.alanBtnInstance = alanBtn({
        key: 'bb3d92c8b39b6ede86e8ce06a572188c2e956eca572e1d8b807a3e2338fdd0dc/stage',
    });
}
}
