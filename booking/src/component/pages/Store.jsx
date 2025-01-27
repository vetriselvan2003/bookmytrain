import {configureStore} from '@reduxjs/toolkit'
import userdetailReducer from '../Slicers/userdetailSlicer'
import selectedtrainReducer from '../Slicers/selectedtrainSlicer'
import passengerReducer from '../Slicers/passengerdetailSlicer'

export const Store=configureStore(
    {
        reducer:{
            userdetail:userdetailReducer,
            selectedtrain:selectedtrainReducer,
            passengersdetail:passengerReducer,
        }
    }
)
