#установка-и-запуск-jekyll-через-docker
https://guides.hexlet.io/jekyll/

Примеры и описания официальных сборок
https://github.com/envygeeks/jekyll-docker#readme

Обновление gem и плагинов:
Пагинация
https://jekyllrb.com/docs/pagination/
Изображения в каталоге со статьей
https://github.com/nhoizey/jekyll-postfiles

Удаляем/Переименовываем - Gemfile.lock
Gemfile:
source 'https://rubygems.org'
gem 'jekyll'
group :jekyll_plugins do
    gem 'jekyll-paginate'
    gem 'jekyll-postfiles'
end
# gem


makefile:
build:
	docker run --rm \
	  --volume=$(PWD):/srv/jekyll \
	  -it jekyll/jekyll:$(JEKYLL_VERSION) \
         bundle install
	  jekyll build

ПРимеры CSV, HTML
https://dev-notes.eu/2015/09/jekyll-page-sections/

Картинки в томже каталоге, изображения в каталоге
https://nhoizey.github.io/jekyll-postfiles/

https://guides.hexlet.io/jekyll/

Free vps 
Log in at https://buddy.works with your GitHub/Bitbucket account or email
for jekyll
https://jekyllrb.com/docs/continuous-integration/buddyworks/

Настройка шаблона HTML
https://jekyllrb.com/tutorials/convert-site-to-jekyll/

---
# Jekyll Bootstrap 4 Boilerplate Theme + Docker

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=jekyll-bootstrap4-docker)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=jekyll-bootstrap4-docker).
##

Demo: https://hexlet-boilerplates.github.io/jekyll-bootstrap4-docker/

This is a complete Dockerized Jekyll setup with a custom Bootstrap 4 theme. The setup is compatible with Github Pages: there are no unsupported plugins here.

You can ignore Docker stuff if you want and use Jekyll directly.

## Usage with Docker

Building:

```
make build
```

Serving:

```
make serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Usage without Docker

```bash
# clone repo 
git clone git@github.com:hexlet-boilerplates/jekyll-bootstrap4-docker.git

# cd and install jekyll
cd jekyll-bootstrap4-docker
sudo gem install jekyll

# start
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Todo

- [x] OG-tags support
- [ ] Bootstrap SASS
