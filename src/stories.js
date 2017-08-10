import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import './config/stylesheets/application.scss';

setAddon(infoAddon);

const req = require.context('../src/', true, /.stories.js$/);

configure(
  () => req.keys().forEach(filename => req(filename)),
  module,
);
