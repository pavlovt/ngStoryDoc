import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AppComponent } from '../src/app/app.component';

storiesOf('My Button', module)
  .add('App Component', () => ({
    component: AppComponent,
  }))