
export function changeTerritory (state, territory) {
    let oez =[]
    let oez_ru =[]
    let industrial = []
    let any = []
    for (let i = 0; i<territory.length; i++){
        if (territory[i].territory == "oez"){
            oez.push(territory[i])
            state.square.oez = oez
    
        }
        else if (territory[i].territory == "oezru") {
            oez_ru.push(territory[i])
           state.square.oez_ru = oez_ru     
    }
    else if(territory[i].territory == 'industrial'){
        industrial.push(territory[i])
        state.square.industrial = industrial
    }
    else if(territory[i].territory == 'any'){
        any.push(territory[i])
        state.square.any = any
    }
    }
}

