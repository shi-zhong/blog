#### Git Repository
1. `git log <--pretty=oneline | --graph>` show previous commits
2. `git relog` 

#### Git Tag
1. `git tag -a <tagname> -m "<describe content>" <branchHash>`
2. `git tag <tagname> <branchHash>`
3. `git tag -d <tagname>`
4. `git push origin <tanname>`
5. `git push origin :refs/tags/<tagname>` 移除远程Tag

#### Git Version
1. `git reset --hard HEAD^`
2. `git checkout -- <file>` 文件回退\*到上一个版本(上一个commit/add)
3. `git reset HEAD <file>` 取消暂存区的文件提交（文件不变）

#### Git Remote
1. `git remote add origin git@github.com:<user-name>/<repository>`添加远程仓库
2. `git remote -v` 查看远程版本库
3. `git remote rm <remote-name>`
4. `git push <--set-upstream | -u> <origin-repository> <branch-name>` 推送并追踪上游远程分支

#### Git Branchs
1. `git merge <branch>`  将对应分支的修改合并到本分支。当目标分支拉取后，本分支没有更新（目标分支和本分支在一条线上），默认使用`fast forward`模式，即将本分支的指针直接指向目标分支最新节点，删除目标分支后失去相关修改记录。使用`git merge --no-ff <branch>`后，会创建一个新的节点，分别指向目标分支和当前分支最新节，删除目标分支后，仍会有分叉记录。
2. `git stash <list | apply <stash@{number}> | drop | pop>`
3. `git cherry-pick`