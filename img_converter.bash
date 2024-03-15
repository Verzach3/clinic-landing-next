#!/bin/bash

directorio="./public/p"
comando="sharp -i {} -o {}.avif"

find "$directorio" -type f -exec bash -c "$comando" \;
