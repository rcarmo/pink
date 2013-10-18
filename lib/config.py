import os, sys, logging.config
from utils import get_config, path_for

try:
    settings
except NameError:
    settings = get_config(path_for(os.path.join('etc','config.json')))
    logging.config.dictConfig(dict(settings.logging))
