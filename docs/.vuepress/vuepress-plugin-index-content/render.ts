/** @format */

import fs from 'fs';
import Path from 'path';

import { isMd, rootPath, log, getRootPath } from './resolveFiles';

const readConfig = (path = '.vuepress') => {
  const config = {
    exist: false,
    file: {},
  };

  log(path);

  try {
    const file = fs.readFileSync(`${path}/config.json`);
    config.exist = true;
    config.file = JSON.parse(file.toString());
  } catch (err) {
    console.error('[File Not Exist]', `${path}/config.json`);
  }

  return config;
};

// 合并配置文件   对于基本数据类型，直接覆盖
//              对于引用数据类型，数组直接合并，对象同上操作
const mergeConfig = (a: object, b: object) => {
  if (a === undefined || b === undefined) {
    if (a !== undefined) return a;
    if (b !== undefined) return b;
  }

  const config = { ...a };
  Object.keys(b).map((k) => {
    if (a[k] !== undefined) {
      if (typeof a[k] !== 'object') {
        config[k] === b[k];
      } else if (a[k] instanceof Array) {
        config[k] = b[k].concat(a[k]);
      } else {
        config[k] = mergeConfig(a[k], b[k]);
      }
    } else {
      config[k] = b[k];
    }
  });
  return config;
};

const getRootConfig = () => {
  let rootConfig;
  return () => {
    if (!rootConfig) {
      rootConfig = readConfig(Path.resolve(rootPath, '.vuepress'));
    }
    return rootConfig;
  };
};

const rootConfig = getRootConfig();

export const RenderIndexMd = (files, path) => {
  const rootDir = Path.resolve(getRootPath(), path);
  // path = path.resolve(root, path);
  const dirConfig = readConfig(path);

  const config: any = mergeConfig(dirConfig.file, rootConfig().file);

  let head = RenderHead(config);
  let style = RenderStyle(config.style);

  let file = RenderContentList(files, path);

  fs.writeFile(
    rootDir + '/index.md',
    [head, style, file].join('\n\n'),
    {},
    () => {
      log(rootDir + '/index.md');
    }
  );
};

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
  const dirList: { [key: string]: string } = {};
  Object.keys(files).map((f: string) => {
    if (isMd(f)) {
      fileList.push(renderFile(`${end ? path : './'}${f}`, files[f], +end)); // file
    } else {
      if (!end) {
        dirList[f] = RenderContentList(files[f], `${f}/`, true);
      } else {
        dirList[f] = RenderDir(`${path}${f}`, +end);
      }
    }
  });
  return [
    ...Object.keys(dirList).map((dir) => Indent(dir, dirList[dir], +end)),
    ...fileList,
  ].join('\n');
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
