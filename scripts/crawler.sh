#!/bin/bash

HOME="https://www.yahoo.com"
DOMAINS="yahoo.com"
DEPTH=2
OUTPUT="../output/urls.txt"

wget -r --spider --delete-after --force-html -D "$DOMAINS" -l $DEPTH "$HOME" 2>&1 \
    | grep '^--' | awk '{ print $3 }' | grep -v '\. \(!css\|!images\|!js\|!png\|!gif\|!jpg\)$' | sort | uniq > $OUTPUT


