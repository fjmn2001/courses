(() => {

    // Types
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    const exist: boolean = false;

    // Tuplas
    const herosTuple: [string, string] = [batman, superman];
    const villians: [string, number, boolean] = ['Lex Lutor', 5, true];

    // Arreglos
    const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

    //Enumeraciones
    enum Forzes {
        fuerzaAcuaman = 0,
        fuerzaBatman = 1,
        fuerzaFlash = 5,
        fuerzaSuperman = 100
    }

    const fuerzaAcuaman: Forzes = Forzes.fuerzaAcuaman
    const fuerzaBatman: Forzes = Forzes.fuerzaBatman
    const fuerzaFlash: Forzes = Forzes.fuerzaFlash
    const fuerzaSuperman: Forzes = Forzes.fuerzaSuperman

    // Retorno de funciones
    function activar_batisenal(): string {
        return 'activada';
    }

    function pedir_ayuda(): void {
        console.log('Auxilio!!!');
    }

    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder: number = (poder as string).length;
    console.log(largoDelPoder);

})()