import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../stories/exercitation')
  require('../stories/pagination')
  require('../stories/postsinfo')
}

configure(loadStories, module);
