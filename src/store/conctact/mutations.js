
export function changeContact (state, data) {
    const leader = []
    const agent = []
    const team = {}
  
           for(let i = 0; i<data.length; i++){
              if (data[i].role == 'leader'){
                 leader.push(data[i])
              }
                 else{
                     agent.push(data[i])
                 }
            }
        team.agent = agent
        team.leader = leader
        state.team = team
        }

