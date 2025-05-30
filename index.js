import antlr4 from 'antlr4';
import PruebaLexer from './generated/PruebaLexer.js';
import PruebaParser from './generated/PruebaParser.js';
import PruebaVisitor from './generated/PruebaVisitor.js';
import fs from 'fs';

// Cargar el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// Crear flujo de caracteres, lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new PruebaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PruebaParser(tokens);

// ---- Agregar listeners para errores ----
let lexicalErrors = [];
let syntaxErrors = [];

lexer.removeErrorListeners();
lexer.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    lexicalErrors.push({ line, column, msg });
  }
});

parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    syntaxErrors.push({ line, column, msg });
  }
});

// Rellenar tokens para que se procese el input y se detecten errores léxicos
tokens.fill();

// Si hay errores léxicos o sintácticos, los mostramos y salimos
if (lexicalErrors.length > 0 || syntaxErrors.length > 0) {
  console.error('❌ Errores detectados durante el análisis:');
  lexicalErrors.forEach(e => {
    console.error(`  Error léxico en línea ${e.line}, columna ${e.column}: ${e.msg}`);
  });
  syntaxErrors.forEach(e => {
    console.error(`  Error sintáctico en línea ${e.line}, columna ${e.column}: ${e.msg}`);
  });
  process.exit(1);
}

// Si no hay errores, seguimos con el análisis
console.log('✅ Análisis sintáctico:');

// Mostrar tabla de lexemas y tokens
console.log('\n🔍 Tabla de Lexemas y Tokens:');
const symbolicNames = PruebaLexer.symbolicNames;
if (!symbolicNames) {
    console.error('Error: PruebaLexer.symbolicNames es undefined');
} else {
    tokens.tokens.forEach(token => {
        if (!token || typeof token.type !== 'number') return;

        const tokenType = token.type;
        const type = (tokenType >= 0 && tokenType < symbolicNames.length) ? symbolicNames[tokenType] : 'UNKNOWN';
        if (!type) return;

        const lexema = token.text ? token.text.replace(/\r?\n/g, '\\n') : '<EOF>';
        console.log(`  [${token.line}:${token.column}] Lexema: "${lexema}" | Token: ${type}`);
    });
}

// Realizar análisis sintáctico
parser.buildParseTrees = true;
const tree = parser.programa();

console.log('\n🌳 Árbol de análisis sintáctico (formato de texto):');
console.log(tree.toStringTree(parser.ruleNames));

// Interpretar usando un visitante personalizado
class Interpreter extends PruebaVisitor {
  constructor() {
    super();
    this.variables = {};
    this.jsCode = '';
  }

  visitPrograma(ctx) {
    ctx.usuario().forEach(usuario => this.visit(usuario));
    return this.jsCode;
  }

  visitUsuario(ctx) {
    const nombre = ctx.ID().getText();
    console.log(`\n🧠 Interpretando usuario: ${nombre}`);
    ctx.atributo().forEach(atributo => this.visit(atributo));
  }

  visitAtributo(ctx) {
    const nombre = ctx.ID().getText();
    const valorNode = ctx.valor();
    let valor;
    let valorJS;

    if (valorNode.numero()) {
      valor = parseInt(valorNode.getText());
      valorJS = valor;
    } else if (valorNode.cadena()) {
      valor = valorNode.getText().slice(1, -1); // quitar comillas
      valorJS = `"${valor}"`;
    } else if (valorNode.booleano()) {
      valor = valorNode.getText() === 'verdadero';
      valorJS = valor ? 'true' : 'false';
    } else {
      valor = null;
      valorJS = 'null';
    }

    this.variables[nombre] = valor;
    console.log(`  ➤ ${nombre} = ${valor}`);

    // Acumular código JS para interpretación posterior
    this.jsCode += `let ${nombre} = ${valorJS};\n`;
  }
}

const interpreter = new Interpreter();
interpreter.visit(tree);

// Mostrar y ejecutar el código JS generado
console.log('\n🌐 Código JavaScript generado:\n');
console.log(interpreter.jsCode);

console.log('\n▶ Ejecutando código JavaScript generado:\n');
try {
  eval(interpreter.jsCode);
} catch (e) {
  console.error('Error durante la ejecución del código JS generado:', e);
}