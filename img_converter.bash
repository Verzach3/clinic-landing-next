#!/bin/bash

directorio="C:/Users/Tony/Desktop/GalleryFolder/Forwomen"
comando="sharp {} -o {}.avif"

find "$directorio" -type f -exec bash -c "$comando" \;
