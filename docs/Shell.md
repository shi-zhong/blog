1. 获取路径
```shell
filepath=$(cd "$(dirname "$0")"; pwd) 
echo "$(basename $0) $(dirname $0) -- $filepath " 
```
2. 检查文件是否为空
```sh
[ -s file ] && file
```