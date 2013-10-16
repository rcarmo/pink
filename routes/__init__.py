#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os, sys, logging, inspect, cgi

log = logging.getLogger()

import utils

from bottle import app, route, request

# import all other routes
import static

@route('/debug')
def dump_headers():
    """Dump headers for debugging"""
    result = ["%s: %s" % (x, request.environ[x]) for x in request.environ.keys()]
    result.append('\n')
    return "<pre>%s</pre>" % cgi.escape('\n'.join(result))
