import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../stories/exercitation')
}

configure(loadStories, module);
