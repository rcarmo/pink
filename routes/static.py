#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os, sys, logging
from bottle import app, route, static_file, view, redirect

log = logging.getLogger()

import utils

@route('/')
def index():
    redirect('/index.html')

@route('/<path:path>')
def send_static(path):
    """Static file handler"""
    return static_file(path, root='static')

