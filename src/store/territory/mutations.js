
export function changeTerritory (state, territory) {
    // let oez = []
    // let oez_ru = []
    // let industrial = []
    // let any = []
    // let techno = []
    const zone = {
        oez:[],
        oezru:[],
        industrial:[],
        any:[],
        techno:[]
    }
        for (let i in territory){
             (territory[i].territory == 'oez' ? zone.oez.push(territory[i])
            : territory[i].territory == 'oezru' ? zone.oezru.push(territory[i])
            : territory[i].territory == 'industrial' ? zone.industrial.push(territory[i])
            : territory[i].territory == 'any' ? zone.any.push(territory[i])
            : zone.techno.push(territory[i]))
        }
        state.zone = zone
    // for (let i = 0; i<territory.length; i++){
    //     if (territory[i].territory == "oez"){
    //         oez.push(territory[i])
    //         state.square.oez = oez
    //     }
    //     else if (territory[i].territory == "oezru") {
    //         oez_ru.push(territory[i])
    //        state.square.oez_ru = oez_ru     
    // }
    // else if(territory[i].territory == 'industrial'){
    //     industrial.push(territory[i])
    //     state.square.industrial = industrial
    // }
    // else if(territory[i].territory == 'any'){
    //     any.push(territory[i])
    //     state.square.any = any
    // }
    // else if(territory[i].territory == 'techno'){
    //     techno.push(territory[i])
    //     state.square.techno = techno
    // }
    // }
}

export function changeListValue (state, value) {
    state.listPlot = value
}
export function changeDetailValue (state, value) {
    state.detailPlot.value = value
}

export function changeDetailPlot(state, object) {
    state.detailPlot.plot = object
}

export function changeListBlockValue (state, value) {
    state.listValue = value
}

export function changeFilterBlockValue (state, value) {
    state.filter = value
}