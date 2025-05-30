// Generated from Prueba.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PruebaListener from './PruebaListener.js';
import PruebaVisitor from './PruebaVisitor.js';

const serializedATN = [4,1,11,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
5,1,27,8,1,10,1,12,1,30,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,
42,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,2,3,46,
0,17,1,0,0,0,2,22,1,0,0,0,4,33,1,0,0,0,6,41,1,0,0,0,8,43,1,0,0,0,10,45,1,
0,0,0,12,47,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,
0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,
22,23,5,1,0,0,23,24,5,10,0,0,24,28,5,6,0,0,25,27,3,4,2,0,26,25,1,0,0,0,27,
30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,
5,7,0,0,32,3,1,0,0,0,33,34,5,10,0,0,34,35,5,4,0,0,35,36,3,6,3,0,36,37,5,
5,0,0,37,5,1,0,0,0,38,42,3,8,4,0,39,42,3,10,5,0,40,42,3,12,6,0,41,38,1,0,
0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,7,1,0,0,0,43,44,5,8,0,0,44,9,1,0,0,0,
45,46,5,9,0,0,46,11,1,0,0,0,47,48,7,0,0,0,48,13,1,0,0,0,3,17,28,41];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PruebaParser extends antlr4.Parser {

    static grammarFileName = "Prueba.g4";
    static literalNames = [ null, "'usuario'", "'verdadero'", "'falso'", 
                            "'='", "';'", "'('", "')'" ];
    static symbolicNames = [ null, "USUARIO", "VERDADERO", "FALSO", "IGUAL", 
                             "SEMI", "LPAREN", "RPAREN", "NUMERO", "STRING", 
                             "ID", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor", "numero", 
                         "cadena", "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PruebaParser.ruleNames;
        this.literalNames = PruebaParser.literalNames;
        this.symbolicNames = PruebaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PruebaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 14;
	            this.usuario();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(PruebaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PruebaParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(PruebaParser.USUARIO);
	        this.state = 23;
	        this.match(PruebaParser.ID);
	        this.state = 24;
	        this.match(PruebaParser.LPAREN);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 25;
	            this.atributo();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
	        this.match(PruebaParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PruebaParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(PruebaParser.ID);
	        this.state = 34;
	        this.match(PruebaParser.IGUAL);
	        this.state = 35;
	        this.valor();
	        this.state = 36;
	        this.match(PruebaParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PruebaParser.RULE_valor);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.numero();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.cadena();
	            break;
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PruebaParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(PruebaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PruebaParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(PruebaParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PruebaParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PruebaParser.EOF = antlr4.Token.EOF;
PruebaParser.USUARIO = 1;
PruebaParser.VERDADERO = 2;
PruebaParser.FALSO = 3;
PruebaParser.IGUAL = 4;
PruebaParser.SEMI = 5;
PruebaParser.LPAREN = 6;
PruebaParser.RPAREN = 7;
PruebaParser.NUMERO = 8;
PruebaParser.STRING = 9;
PruebaParser.ID = 10;
PruebaParser.WS = 11;

PruebaParser.RULE_programa = 0;
PruebaParser.RULE_usuario = 1;
PruebaParser.RULE_atributo = 2;
PruebaParser.RULE_valor = 3;
PruebaParser.RULE_numero = 4;
PruebaParser.RULE_cadena = 5;
PruebaParser.RULE_booleano = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(PruebaParser.EOF, 0);
	};

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_usuario;
    }

	USUARIO() {
	    return this.getToken(PruebaParser.USUARIO, 0);
	};

	ID() {
	    return this.getToken(PruebaParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(PruebaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PruebaParser.RPAREN, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_atributo;
    }

	ID() {
	    return this.getToken(PruebaParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(PruebaParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(PruebaParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(PruebaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_cadena;
    }

	STRING() {
	    return this.getToken(PruebaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PruebaParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(PruebaParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(PruebaParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PruebaListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PruebaVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PruebaParser.ProgramaContext = ProgramaContext; 
PruebaParser.UsuarioContext = UsuarioContext; 
PruebaParser.AtributoContext = AtributoContext; 
PruebaParser.ValorContext = ValorContext; 
PruebaParser.NumeroContext = NumeroContext; 
PruebaParser.CadenaContext = CadenaContext; 
PruebaParser.BooleanoContext = BooleanoContext; 
