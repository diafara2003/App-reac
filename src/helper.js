export const validarPpto = (ppto) => {

    let total_ppto = parseInt(ppto, 10) || 0

    if (total_ppto > 0) {
        return total_ppto;
    } else {
      return  false;
    }
}

export const revisarPpto = (ppto, restante) => {
    let _class;
    //comprobar el 25%
    if ((ppto / 4) > restante) {
        _class = 'alert alert-danger'
    } else if ((ppto / 2) > restante) {
        _class = 'alert alert-wrning'
    } else {
        _class = 'alert alert-success'
    }


    return _class;
}