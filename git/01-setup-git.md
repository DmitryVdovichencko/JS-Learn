# Базовая настройка GIT

Устанавливаем GIT

```
apt-get install git
```

Настраиваем имя пользователя, почту и параметры окончаний строк

```
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"

git config --global core.autocrlf input
git config --global core.safecrlf true
```

Настраиваем алиасы в `.gitconfig`

```
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
  type = cat-file -t
  dump = cat-file -p
```



