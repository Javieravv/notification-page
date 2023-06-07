
// Función para mostrar la diferencia entre dos fechas
export const difDiasDate = (date1: number, date2: number) => {
    const fecha1 = new Date (date1)
    const fecha2 = new Date (date2)
    const diferencia = fecha2.getTime() - fecha1.getTime()
    const diasDiferencia = diferencia / 1000 / 60 / 60 / 24
    return diasDiferencia
}

export const textDiasDate = (date1: number, date2: number) => {
    const diasDiferencia = difDiasDate(date1, date2)
    let textDateTemp = ""
    switch (true) {
        case diasDiferencia < 1:
            textDateTemp = new Date (date1).toDateString();
            break;
        case ((diasDiferencia > 1) && (diasDiferencia <= 7)):
            textDateTemp = `${diasDiferencia.toFixed(0)} days ago`;
            break;
        case ((diasDiferencia > 7) && (diasDiferencia <= 30)):
            textDateTemp = `${ Math.round( diasDiferencia / 7 ) } weeks ago`;
            break;
        case ((diasDiferencia > 30) && (diasDiferencia <= 365)):
            textDateTemp = `${ Math.round( diasDiferencia / 30 ) } months ago`;
            break;
        case diasDiferencia > 365:
            textDateTemp = `${ Math.round( diasDiferencia / 365 ) } years ago`;
            break;
        default:
            textDateTemp = diasDiferencia.toFixed(0).toString();
    }
    return textDateTemp
}

// Devolver un booleano aleatorio entre true y false
export const booleanRandom = () => {
    return Math.random() > 0.5
}

// Generar una fecha aleatoria
export const dateRandom = ( dateInit: Date, dateEnd: Date ) => {
    const timeStampDateInit =  dateInit.getTime() ;
    const timeStampDateEnd =  dateEnd.getTime() ;

    // Generamos TimeStamp aleatorio
    const timestampAleatorio = Math.random() * (timeStampDateEnd - timeStampDateInit) + timeStampDateInit;
    return new Date (timestampAleatorio)
}
