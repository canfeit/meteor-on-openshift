# meteor-on-openshift

## 使用说明

1.打包你的meteor应用到你的openshift仓库根目录
```bash
cd your_meteor_application_dir
meteor build your_openshift_repo_dir --architecture os.linux.x86_64 --server-only
```

2.将本项目并入你的openshift仓库
```bash
cd your_openshift_repo_dir
git remote add upstream -m master git://github.com/canfeit/meteor-on-openshift.git
git pull -s recursive -X theirs upstream master
```

3.在meteorshim.js中设置你自己的APP_DNS值

4.发布到openshift
```bash
git add . 
git update-index --chmod=+x .openshift/action_hooks/build
git update-index --chmod=+x .openshift/action_hooks/pre_build
git add . && git commit -m 'u' && git push
```
5.等待你的openshift服务重启完成
