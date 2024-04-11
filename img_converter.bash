#!/bin/bash

directorio="../../Users/Tony/Desktop/GalleryFolder/"

comando() {
    local entrada="$1"
    local salida="${entrada%.*}.avif"
    
    if [[ ! -f "$salida" ]]; then
        echo "Convirtiendo $entrada a $salida"
        sharp -i "$entrada" -o "$salida"
        
        if [[ $? -eq 0 ]]; then
            echo "Conversión exitosa. Borrando el archivo original $entrada"
            rm "$entrada"
        else
            echo "Error al convertir $entrada. El archivo original no se borrará."
        fi
    else
        echo "El archivo $salida ya existe. Omitiendo la convers
        ión."
    fi
}

export -f comando

find "$directorio" -type f \( -name "*.jpg" -o -name "*.png"  -o -name "*.webp" \) -print0 | xargs -0 -P $(nproc) -I {} bash -c 'comando "$@"' _ {}

# Cleanup: Eliminar todas las imágenes que no estén en formato AVIF
echo "Limpiando imágenes no AVIF..."
find "$directorio" -type f \( -name "*.jpg" -o -name "*.png"  -o -name "*.webp" \) -print0 | xargs -0 rm
echo "Limpieza completada."