#!/usr/bin/env python3
"""Kinesis project tools. Run --help for commands."""
from pathlib import Path
import runpy
if __name__ == '__main__':
    runpy.run_path(str(Path(__file__).resolve().parent / 'Engine/Motion/System/Project-Toolkit.py'), run_name='__main__')
