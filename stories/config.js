import { configure } from '@storybook/angular';

function loadStories() {
  require('./index.ts');
}

configure(loadStories, module);