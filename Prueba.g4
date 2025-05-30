grammar Prueba;

programa : usuario* EOF ;

usuario : USUARIO ID LPAREN atributo* RPAREN ;

atributo : ID IGUAL valor SEMI ;

valor : numero
      | cadena
      | booleano
      ;

numero : NUMERO ;

cadena : STRING ;

booleano : VERDADERO
        | FALSO
        ;

// Tokens

USUARIO : 'usuario' ;
VERDADERO : 'verdadero' ;
FALSO : 'falso' ;

IGUAL : '=' ;
SEMI : ';' ;
LPAREN : '(' ;
RPAREN : ')' ;

// Token para números
NUMERO : [0-9]+ ;

// Token para cadena (texto entre comillas simples)
STRING : '\'' (LETRA | DIGITO | ESPACIO | SIMBOLO)* '\'' ;

// Fragmentos (deben ir antes de usarse)

fragment LETRA : [a-zA-Z] ;
fragment DIGITO : [0-9] ;
fragment SIMBOLO : [.,!?:;'] ;
fragment ESPACIO : ' ' ;

ID : LETRA (LETRA | DIGITO)* ;

WS : [ \t\r\n\f]+ -> skip ;