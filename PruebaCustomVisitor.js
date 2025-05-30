import PruebaVisitor from './generated/PruebaVisitor.js';

class CustomVisitor extends PruebaVisitor {
  constructor() {
    super();
    this.usuarios = [];
  }

  // Visita el nodo raíz del programa
  visitPrograma(ctx) {
    ctx.usuario().forEach(usuarioCtx => {
      const usuario = this.visit(usuarioCtx);
      this.usuarios.push(usuario);
    });
    return this.usuarios;
  }

  // Visita un nodo de usuario
  visitUsuario(ctx) {
    const nombreUsuario = ctx.ID().getText();
    const atributos = {};

    ctx.atributo().forEach(atributoCtx => {
      const { nombre, valor } = this.visit(atributoCtx);
      atributos[nombre] = valor;
    });

    return {
      nombre: nombreUsuario,
      atributos: atributos
    };
  }

  // Visita un nodo de atributo
  visitAtributo(ctx) {
    const nombre = ctx.ID().getText();
    const valor = this.visit(ctx.valor());

    return { nombre, valor };
  }

  // Visita un nodo de valor
  visitValor(ctx) {
    if (ctx.numero()) {
      return parseInt(ctx.numero().getText(), 10);
    } else if (ctx.cadena()) {
      // Eliminar comillas simples del string
      const text = ctx.cadena().getText();
      return text.slice(1, -1);
    } else if (ctx.booleano()) {
      return ctx.booleano().getText() === 'verdadero';
    } else {
      return null;
    }
  }
}

export default CustomVisitor;
