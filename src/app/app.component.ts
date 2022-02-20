import { Component } from '@angular/core';
import alanBtn from "@alan-ai/alan-sdk-web";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voice-interaction-List-App-angular';
  alanBtnInstance;
  todolist: any[] = ['Permanent List Item'];

  constructor(){
    this.alanBtnInstance = alanBtn({
        key: 'bb3d92c8b39b6ede86e8ce06a572188c2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData: any) => {
          if(commandData.command === 'addList') {
            this.todolist.push(commandData.data);
          } else {
            this.alanBtnInstance.activate();
            if(this.todolist.includes(commandData.data)) {
              this.todolist = this.todolist.filter(list => list !== commandData.data);
              this.alanBtnInstance.callProjectApi("playRemoveMessage", {
                data: commandData.data
              }, function(error, result) {
                console.log(error, result);
              });
            } else {
              // Calling the project API method on button click
              this.alanBtnInstance.callProjectApi("playRemoveMessageError", {
                data: commandData.data
              }, function(error, result) {
                console.log(error, result);
              });
            }
          }
        },
    });
}
}
