/**
 * 抓取docs文件夹下所有md文件的标题
 *
 * 如果有设置，则抓取键值对
 *
 * 没有则抓取第一行作为标题
 *
 * @format
 */

/**
 * 该插件目标：根据配置文件生成目录
 * 1. 根据文件夹下的配置文件config.json来进行配置
 * 2. 根据.md文件的标签来进行配置
 */

import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(import.meta.url).slice(7);

export const rootPath = path.resolve(__dirname, '../..'); // /home/liuan/Applications/VuePressBlog/docs
export const getRootPath = () => path.resolve(__dirname, '../..');

const mdReg = /.md$/;

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

export const DirName = (fileName: string) => {
  const dir = fileName.split('/').slice(0, -1).join('/');
  if (dir.startsWith('/')) {
    return dir;
  } else {
    return `/${dir}`;
  }
};

export const resolvePath = (rela_ath) => {
  return path.resolve(getRootPath(), rela_ath);
};

export const ReadConfig = (dir) => {
  const configPath = resolvePath(`.${dir}/config.json`);

  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  } catch (error) {
    return {};
  }
};
