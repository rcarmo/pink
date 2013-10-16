#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os, sys, logging

log = logging.getLogger()

from bottle import app, route, static_file, view
from config import settings
import utils

prefix = "/api/public/"

@route(prefix + 'code/<id:int>')
@view('errors.tpl')
def error_page(id):
    return settings.errors.pages[str(id)]

@route('/api/docs/<path:path>')
@view('docs.tpl')
def send_doc_wrapper(path):
    docs = utils.docs()
    if path in docs:
        return {"title": path.title(), "docs": docs[path]}
    abort(404,"Not Found")

@route('/api/static/markup/<path:path>')
def send_markup(path):
    return static_file(path, root='docs')

@route('/api/static/<path:path>')
def send_static(path):
    """Static file handler"""
    return static_file(path, root='static')

