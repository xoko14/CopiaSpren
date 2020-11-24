import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
const inquirer = require('inquirer')
const fs = require('fs')
const chalk = require('chalk')

class CopiaSprenTs extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    categ: flags.string({ options: ['suxeito', 'verbo', 'complemento circunstancial'], hidden: true })
  }

  static args = [
    {
      name: 'diccionario',
      required: true,
      description: 'diccionario de unidades sintácticas a utilizar (ex: ./diccionario.json)',

    }
  ]

  async run() {
    const { args, flags } = this.parse(CopiaSprenTs)
    const dicLoc = fs.readFileSync(`${args.diccionario}`, 'utf8')
    const dic = JSON.parse(dicLoc)

    var vMax = 0
    var frases:string[] = []
    var veces
    var frase = "default"

    console.log(chalk.green('\nDiccionario a utilizar:'));
    console.log(chalk.bold('Nome: ') + dic.name);
    console.log(chalk.bold('Descripción: ') + dic.description);
    console.log(chalk.bold('Autor/a: ') + dic.author);

    console.log('\n')
    let categ = flags.categ
    if (!categ) {
      let responses: any = await inquirer.prompt([{
        name: 'categ',
        message: 'elemento a proveer:',
        type: 'list',
        choices: [{ name: 'suxeito' }, { name: 'verbo' }, { name: 'complemento circunstancial' }],
      }])
      categ = responses.categ
    }
    //this.log(`escollido: ${categ}`)

    const palabra = await cli.prompt(chalk.bold(`Escribe o ${categ}`))

    switch (categ) {
      case 'suxeito':
        vMax = dic.verbos.length * dic.ccs.length
        break
      case 'verbo':
        vMax = dic.sujetos.length * dic.ccs.length;
        break
      case 'complemento circunstancial':
        vMax = dic.sujetos.length * dic.verbos.length
        break
    }
    while (true) {
      veces = await cli.prompt(chalk.bold(`Frases a facer (max ${vMax})`))
      if (veces <= vMax) break
      else {
        console.log(chalk.red(`non pode ser maior que ${vMax}!`));
      }
    }

    console.log('\n');
    

    while (veces > 0) {
      var verboR = randomItem(dic.verbos);
      var sujetoR = randomItem(dic.sujetos);
      var ccR = randomItem(dic.ccs);

      switch (categ) {
        case 'suxeito':
          frase = (palabra + " " + verboR + " " + ccR + ".");
          break;
        case 'verbo':
          frase = (sujetoR + " " + palabra + " " + ccR + ".");
          break
        case 'complemento circunstancial':
          frase = (sujetoR + " " + verboR + " " + palabra + ".");
          break;
        default:
          console.log("Algo no funciona");
          break;
      }

      if (frases.includes(frase)) {
        //console.log("repe");
      }
      else {
        frases.push(frase);
        console.log(frase);
        veces--
      }
    }

    console.log(frases.length)

    function randomItem(list:string[]) {
      return list[Math.floor((Math.random() * list.length))];
    }

  }
}

export = CopiaSprenTs
