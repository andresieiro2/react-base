import * as hom from './homologation';
import * as prod from './production';
import * as dev from './development';

const env = {
  hom,
  prod,
  dev,
};

export default env[process.env.REACT_APP_ENV];
