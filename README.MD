# VICECODE-TEMPLATE
Шаблон для разработки сайтов

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Автоматизированы такие задачи как:

  - Конвертация шрифтов
  - Конвертация SVG иконок и объединение в спрайт
  - Деплой проекта на сервер
  - Вывод показателей с Google Page Speed
  - Создание скриншота проекта

### Установка и работа с проектом

Для работы необходима последняя версия [Node.js](https://nodejs.org/)

Установка проекта:

```sh
$ cd vicecode-template
$ npm install -i
```

Запуск в режиме разработки:

```sh
$ gulp
```

Генерация favicon

```sh
$ gulp favicon
```

Деплой на сервер

```sh
$ gulp deploy
```

Вывести показатели с Google Page Speed

```sh
$ gulp pagespeed
```

Генерировать скриншот

```sh
$ gulp screen
```

### Todos

 - Доработка объединия url сайта
 - Оптимизациея изображений
 - Доработка мануала