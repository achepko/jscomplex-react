
const carActionType={
    SET_ALL:'SET_ALL',
    SET_CAR_FOR_UPDATE:'SET_CAR_FOR_UPDATE',
    TRIGGER:'TRIGGER'
}

const carActions={
    setAll:(cars)=>({type:carActionType.SET_ALL,payload:cars}),
    setCarForUpdate:(car)=>({type:carActionType.SET_CAR_FOR_UPDATE,payload:car}),
    setTrigger:()=>({type:carActionType.TRIGGER}),
}

const carInitialState={
    cars:[],
    carForUpdate: null,
    trigger: null
}
const carReducer = (state,action)=>{
    switch (action.type){
        case carActionType.SET_ALL:
            return {...state,cars: action.payload}
        case carActionType.SET_CAR_FOR_UPDATE:
            return {...state,carForUpdate:action.payload}
        case carActionType.TRIGGER:
            return {...state,trigger:!state.trigger}
        default:
            return state
    }
}

export {
    carActions,
    carInitialState,
    carReducer
}