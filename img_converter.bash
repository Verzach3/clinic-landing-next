#!/bin/bash

directorio="./public/"
comando="sharp -i {} -o {}.avif"

find "$directorio" -type f -exec bash -c "$comando" \;
