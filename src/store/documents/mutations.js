export function changeDocs (state, data) {
    state.data = data
}
export function changeAccess (state, route) {
     for (let value of state.data.section){
         if (route == value.slug || route == undefined){
            state.access = true
         }
       }


}