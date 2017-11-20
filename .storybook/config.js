import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/signup')
  require('../stories/pages')
  require('../stories');
  require('../stories/exercitation')
  require('../stories/pagination')
  require('../stories/postsinfo')
  require('../stories/login')
  require('../stories/company')
  require('../stories/TraineeFilter')
  require('../stories/ann')
}

configure(loadStories, module);
