import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import {PickerView} from './styles'

export default function Picker({onChange,tipo}){
    return(
        <PickerView>   
            <RNPickerSelect
            style={{
                inputIOS:{
                    height:50,
                    padding:5,
                    backgroundColor:'#fff',
                    fontSize:16
                }
            }}
            placeholder={{
                label: 'Selecionde o tipo',
                color: 'rgba(255,255,255,0.70)',
                value: null,
            }}
            
            selectedValue={tipo}
            onValueChange={(valor)=> onChange(valor)}
            items={[
                {label: 'Receita', value: 'receita',color:'#222'},
                {label: 'Despesa', value: 'despesa',color:'#222'},
            ]}
            />

        </PickerView>
    )
}