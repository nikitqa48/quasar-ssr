export function changeSupport (state, data) {
    state.stateSupport = data
}
export function changeDetailSupport (state, data){
    state.detailSupport = data
    return {
        detailSupport:data
    }
}
export function changeCheck (state, data) {
    state.check = data
    return {
        check:data
    }
}