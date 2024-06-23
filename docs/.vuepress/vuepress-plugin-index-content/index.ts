/** @format */
import { App } from 'vuepress';
import { DirName, ReadConfig } from './resolveFiles';
import RenderRoot from './render';

export default (options?: object) => {
  return (app) => {
    return {
      name: 'vuepress-plugin-index-content',
      onInitialized: (app: App) => {
        const dirs = {};

        app.pages.map((page, i) => {
          const { data, slug, filePathRelative } = page;
          const { frontmatter, title } = data;

          if (!filePathRelative) return;

          const dir = DirName(filePathRelative);

          if (!dirs[dir]) {
            dirs[dir] = {
              dir: dir,
              files: [],
            };
          }

          if (frontmatter.hide !== true && slug !== 'index') {
            dirs[dir].files.push({
              title: title ?? slug,
              frontmatter,
              slug,
            });
          }
        });

        Object.keys(dirs).forEach((dir) => {
          dirs[dir].config = ReadConfig(dir);

          if (dirs[dir].config.excludes) {
            dirs[dir].files = dirs[dir].files.filter(
              (file) => !dirs[dir].config.excludes.includes(file.slug)
            );
          }

          // render root
          RenderRoot(dir, dirs[dir]);
        });
      },
      onPrepared: (app: App) => {},
    };
  };
};
