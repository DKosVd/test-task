import { actionType } from '../actionType'


export const addPart = ( {data, idx } ) => {
    return {
        type:actionType.ADD_PART_OF_ENTITY,
        payload: {
            data,
            idx
        }
    }
}

export const addNew = (data) => {
    return {
        type: actionType.ADD_ENTITY, 
        payload: data
    }
}