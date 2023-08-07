/** @format */
import { App } from 'vuepress';
import Hook from './resolveFiles';

export default (options?: object) => {
  return (app) => {
    return {
      name: 'vuepress-plugin-index-content',
      onInitialized: (app: App) => {
        Hook();
      },
      onPrepared: (app: App) => {},
    };
  };
};
