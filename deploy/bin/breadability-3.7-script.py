#!"c:\program files (x86)\python37-32\python.exe"
# EASY-INSTALL-ENTRY-SCRIPT: 'breadability==0.1.20','console_scripts','breadability-3.7'
__requires__ = 'breadability==0.1.20'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('breadability==0.1.20', 'console_scripts', 'breadability-3.7')()
    )
