/** @format */

import fs from 'fs';
import Path from 'path';

import { isMd, rootPath, log, resolvePath } from './resolveFiles';

import RootConfig from '../config.json';

function formaDate(timer) {
  function pad(timeEl, total = 2, str = '0') {
    return timeEl.toString().padStart(total, str);
  }
  const year = timer.getFullYear();
  const month = timer.getMonth() + 1; // 由于月份从0开始，因此需加1
  const day = timer.getDate();
  const hour = timer.getHours();
  const minute = timer.getMinutes();
  const second = timer.getSeconds();
  return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(
    minute
  )}:${pad(second)}`;
}

const RenderHead = (config) => {
  if (config.head) {
    return (
      '---\n' +
      Object.keys(config.head)
        .map((k) => {
          if (k === 'date' && config.head[k].toLowerCase() === 'auto') {
            return `${k}: ${formaDate(new Date())}`;
          }
          return `${k}: ${config.head[k]}`;
        })
        .join('\n') +
      '\n---\n'
    );
  }
  return '';
};

/**
 * 渲染正文list, 只渲染两层
 * @param files
 * @param currentPath
 * @returns
 */
const RenderContentList = (files, path: string, end = false) => {
  const fileList: string[] = [];
  files.map((f: object) => {
    fileList.push(`### [${f.title || f.slug}](./${(f.slug).replaceAll(' ', '%20')}.md)`);
  });
  return fileList.join('\n');
};

const RenderDir = (path: string, indent = 0) => {
  return `##${indent == 0 ? '' : '#'} [${path}](${path})`;
};

const Indent = (dir, file, indent) => {
  return `${RenderDir(dir, indent)}
<div class="content-level-${indent}">

${file}
</div>
`;
};

/**
 *
 * @param {string} file
 * @param {{title: string}} data
 * @returns
 */
const renderFile = (file, data, indent = 0) => {
  return `##${indent == 0 ? '' : '#'} [${data.title}](${file})  `;
};

const RenderStyle = (style: object) => {
  if (typeof style !== 'object') return '';
  return `<style>
${Object.keys(style)
  .map((select) => {
    return `${select} {
${Object.keys(style[select])
  .map((k) => `  ${k}: ${style[select][k]}`)
  .join(';\n')}
}`;
  })
  .join('\n')}
</style>`;
};

export default (path: string, data: object) => {
  const base = resolvePath(`.${path}/index.md`);

  // '/前端基础知识': {
  //   dir: '/前端基础知识',
  //   files: [ [Object], [Object], [Object], [Object] ],
  //   config: {}
  // },
  // fs.writeFileSync(base, JSON.stringify(data, null, 4));

  const rootDir = '';
  // path = path.resolve(root, path);

  console.log(base);
  console.log(
    [RenderStyle(RootConfig.style), RenderContentList(data.files!, path)].join(
      '\n\n'
    )
  );
  console.log(JSON.stringify(data, null, 4));
  fs.writeFile(
    base,
    [RenderStyle(RootConfig.style), RenderContentList(data.files!, path)].join(
      '\n\n'
    ),
    {},
    () => {
      log(base);
    }
  );
};
