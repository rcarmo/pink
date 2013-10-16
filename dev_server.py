#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Main application script

Created by: Rui Carmo
"""

import os, sys, logging, logging.config

# Make sure our bundled libraries take precedence
sys.path.insert(0,os.path.join(os.path.dirname(os.path.abspath(__file__)),'lib'))

import utils, bottle, config

# read configuration file
config.settings = utils.get_config(os.path.join(utils.path_for('etc'),'config.json'))

# Set up logging
logging.config.dictConfig(dict(config.settings.logging))

log = logging.getLogger()

if __name__ == "__main__":

    if config.settings.reloader:
        if 'BOTTLE_CHILD' not in os.environ:
            log.debug('Using reloader, spawning first child.')
        else:
            log.debug('Child spawned.')

    if not config.settings.reloader or ('BOTTLE_CHILD' in os.environ):
        log.info("Setting up application.")
        import api, routes
        log.info("Serving requests.")

    bottle.run(
        port     = config.settings.http.port, 
        host     = config.settings.http.bind_address, 
        debug    = config.settings.debug,
        reloader = config.settings.reloader
    )
