export function changeSupport (state, data) {
    state.stateSupport = data
}
export function changeDetailSupport (state, data){
    state.detailSupport = data
    return {
        detailSupport:data
    }
}