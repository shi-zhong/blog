/**
 * 抓取docs文件夹下所有md文件的标题，前7行
 *
 * 如果有设置，则抓取键值对
 *
 * 没有则抓取第一行作为标题
 *
 * @format
 */

import fs from 'fs';
import path from 'path';
import { RenderIndexMd } from './render';

const __dirname = path.dirname(import.meta.url).slice(7);

export const rootPath = path.resolve(__dirname, '../..'); // /home/liuan/Applications/VuePressBlog/docs
export const getRootPath = () => path.resolve(__dirname, '../..');

const mdReg = /.md$/;
const ignoreReg = /^\./;

const exclude = ['index.md', 'README.md', 'template.md'];

/**
 *
 * @param {string} info
 * @param {string} type
 */
export const log = (info, type = 'success') => {
  switch (type) {
    case 'success': {
      console.log(
        colorFormat('[Dir Resolve]: ', 'cyan') + colorFormat(info, 'bright')
      );
      return;
    }
    case 'hide': {
      console.log(
        colorFormat('[Dir Resolve]: ', 'cyan') + colorFormat(info, 'grey')
      );
      return;
    }
    case 'create': {
      console.log(
        colorFormat('[Index Create]: ', 'green') + colorFormat(info, 'grey')
      );
      return;
    }
  }
};

/**
 *
 * @param {string} info
 * @param {'blue'} color
 */
const colorFormat = (info, color = 'white'): string => {
  const colorMap = {
    bright: '\x1B[1m', // 亮色
    grey: '\x1B[2m', // 灰色
    italic: '\x1B[3m', // 斜体
    underline: '\x1B[4m', // 下划线
    reverse: '\x1B[7m', // 反向
    hidden: '\x1B[8m', // 隐藏
    black: '\x1B[30m', // 黑色
    red: '\x1B[31m', // 红色
    green: '\x1B[32m', // 绿色
    yellow: '\x1B[33m', // 黄色
    blue: '\x1B[34m', // 蓝色
    magenta: '\x1B[35m', // 品红
    cyan: '\x1B[36m', // 青色
    white: '\x1B[37m', // 白色
    blackBG: '\x1B[40m', // 背景色为黑色
    redBG: '\x1B[41m', // 背景色为红色
    greenBG: '\x1B[42m', // 背景色为绿色
    yellowBG: '\x1B[43m', // 背景色为黄色
    blueBG: '\x1B[44m', // 背景色为蓝色
    magentaBG: '\x1B[45m', // 背景色为品红
    cyanBG: '\x1B[46m', // 背景色为青色
    whiteBG: '\x1B[47m', // 背景色为白色
  };
  const End = '\x1B[0m';
  return `${colorMap[color]}${info}${End}`;
};

/**
 * @param {string} file
 * @returns { boolean }
 */
export const isMd = (file) => mdReg.test(file);

const isIgnore = (file) => ignoreReg.test(file);

/**
 * @param {string} base
 * @param {object} record
 */
const readDirFiles = (base, record = {}) => {
  fs.readdirSync(base).forEach((file) => {
    let stat = fs.lstatSync(base + '/' + file);

    if (stat.isDirectory()) {
      if (!isIgnore(file)) {
        record[file] = readDirFiles(base + '/' + file);
      } else {
        log(file, 'hide');
      }
    } else if (stat.isFile() && isMd(file)) {
      if (exclude.includes(file)) return;
      let dataset = readFileTitle(base + '/' + file);
      record[file] = dataset;
      log((base + '/' + file).slice(rootPath.length + 1) + ' ' + dataset.title);
    }
  });

  RenderIndexMd(record, base);
  return record;
};

/**
 *
 * @param {string} filePath
 */
const readFileTitle = (filePath): { title: string; [key: string]: string } => {
  const file = fs.readFileSync(filePath);

  const lines = readFileLines(file.toString());

  if (lines[0].trim() === '---') {
    const dataset = { title: 'untitled' };
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() !== '---') {
        let kv = readKeyValue(lines[i]);
        dataset[kv[0]] = kv[1];
      } else {
        break;
      }
    }
    return dataset;
  } else {
    return { title: lines[0] };
  }
};

/**
 * @param {string} fileData
 * @param {number} maxLine
 */
const readFileLines = (fileData, maxLine = 7): string[] => {
  let i = 0,
    p = 0;
  const line: string[] = [];
  while (fileData[i] !== undefined && p < maxLine) {
    if (line[p] === undefined) {
      line.push('');
    }
    if (fileData[i] === '\n') {
      if (line[p].trim().length) {
        p++;
      }
    } else {
      line[p] += fileData[i];
    }
    i++;
  }
  return line;
};

/**
 *
 * @param {string} kv
 */
const readKeyValue = (kv) => {
  const map = kv.split(':');
  if (map.length === 1) {
    return ['unkey', map[0].trim()];
  } else if (map.length === 2) {
    return [map[0].trim(), map[1].trim()];
  } else {
    const key = map.shift();
    return [key.trim(), map.join(':').trim()];
  }
};

export default () => readDirFiles(rootPath);
