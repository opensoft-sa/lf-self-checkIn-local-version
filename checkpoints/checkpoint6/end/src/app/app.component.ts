import {Component, ViewChild} from '@angular/core';
import {LfFileStorage, LfStorage, LfI18n} from '@lightweightform/core';
import {AppComponent as LfAppComponent} from '@lightweightform/bootstrap-theme';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actions = [
    {
      id: 'save',
      style: 'outline-secondary',
      icon: 'save',
      callback: async () => {
        const dateStr = new Date().toISOString().replace(/:|\./g, '-');
        const fileName = `census-${dateStr}.json`;
        try {
          await this.lfFileStorage.saveToFile('/', fileName);
          console.log('Value saved successfully');
          this.lfStorage.setPristine('/');
        } catch (err) {
          console.error('Error saving file:', err);
        }
      },
    },
    {
      id: 'load',
      style: 'outline-secondary',
      icon: 'folder-open',
      isDisabled: !this.lfFileStorage.loadIsSupported,
      callback: async () => {
        try {
          await this.lfFileStorage.loadFromFile('/');
          console.log('Value loaded successfully');
        } catch (err) {
          console.error('Error loading file:', err);
        }
      },
    },
    {
      id: 'validate',
      style: 'outline-danger',
      icon: 'check-square-o',
      callback: () => this.lfApp.validate(),
    },
    {
      id: 'submit',
      text: 'Submit',
      style: 'outline-success',
      icon: 'send',
      callback: () => {
        this.submit();
      },
    },
  ];

  @ViewChild(LfAppComponent, {static: false}) private lfApp: LfAppComponent;

  constructor(
    public lfStorage: LfStorage,
    public lfI18n: LfI18n,
    private lfFileStorage: LfFileStorage,
  ) {}

  submit() {
    if (!this.lfStorage.hasErrors()) {
      console.log(this.lfStorage.shouldShowError());
      fetch('https://selfcheckin.opensoft.pt/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.lfStorage.getAsJS()),
        mode: 'cors',
      })
        .then(response => {
          console.log(response);
          alert('Check-in successful. Enjoy your stay.');
        })
        .catch(ex => {
          console.log(ex);
          alert(ex);
        });
    } else {
      this.lfApp.validate();
    }
  }
}
