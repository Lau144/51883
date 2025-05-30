# 51883
Analizador Sintaxis y Semantica 
INSTRUCCIONES
Clona este repositorio: 
  https://github.com/Lau144/51883


PASOS EN VS CODE
1. Antes de ejecutar el programa, en la consola power shell, ejecutar:  npm start (para inicializar el codigo)
2. Se toma como sentencia lo que hay en input.txt, para probar los diferentes ejemplos, abrir el ejemplo a probar y copiarlo en input.txt (Ctrl+s para guardar)

Al ejecutar se deberia mostrar en la consola los error que hay (en caso de tomar los ejemplos incorrectos), la tabla de lexemas y tokens, el arbol sintactico correspondiente y la traduccion a JavaScript


En caso de dar algun error:
1. verificar que esta instalada la extension de antlr4 con el comando: npm install antlr4
2. en caso que no se generen los archivos Listener o Visitor, ejecutar:  java -jar .\antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o .\generated -listener -visitor Prueba.g4
  
