$directorio = "../../Users/Tony/Desktop/GalleryFolder/"

function Comando {
    param($entrada)
    $salida = [System.IO.Path]::ChangeExtension($entrada, "avif")
    
    if (!(Test-Path $salida)) {
        Write-Output "Convirtiendo $entrada a $salida"
        sharp -i $entrada -o $salida
    } else {
        Write-Output "El archivo $salida ya existe. Omitiendo la conversión."
    }
}

Get-ChildItem -Path $directorio -Recurse -Include "*.jpg", "*.png" | ForEach-Object -Parallel {
    Comando $_.FullName
}