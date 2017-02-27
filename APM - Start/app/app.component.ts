import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started {{pageTitleAppendix}}</h1>
    `
})
export class AppComponent { 
    pageTitleAppendix: string = "Test";
}
