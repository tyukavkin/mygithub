#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Александр1'
SITENAME = 'Пеликан Сайт Генератор v1'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Samara'

DEFAULT_LANG = 'ru'

THEME = 'themes/mytheme'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# Defines whether Pelican should use document-relative URLs or not. Only set this to True when developing/testing and only if you fully understand the effect it can have on links/feeds.
# https://docs.getpelican.com/en/stable/settings.html
RELATIVE_URLS = True

#Extra configuration settings for the Markdown processor. https://docs.getpelican.com/en/stable/settings.html
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

#https://docs.getpelican.com/en/stable/settings.html
#TYPOGRIFY = False

#When creating a short summary of an article https://docs.getpelican.com/en/stable/settings.html
SUMMARY_MAX_LENGTH = 50