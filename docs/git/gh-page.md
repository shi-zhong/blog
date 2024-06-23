### 将 react 配置到 github pages 上

gh-pages是github-pages的分支页面，将文件上传到分支之后就可以了


```json
{
  "name": "share",
  "version": "0.1.0",
  "homepage": "https://shi-zhong.github.io/share",
  "private": true,
}
```

创建分支 gh-pages  
`git checkout --orphan gh-pages`  
提交本地   
`git add .. and git commit -m ..`  
提交到分支  
`git push origin gh-pages`  

或者安装 gh-pages 简化提交过程

安装 gh-pages  
`npm install gh-pages --save-dev`  
[gh-pages官网](https://www.npmjs.com/package/gh-pages) 

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
将文件上传至github, 执行`npm run deploy`