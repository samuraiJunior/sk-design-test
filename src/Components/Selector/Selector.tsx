import { TextField } from '@mui/material'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'
import styled from 'styled-components'
import { IValidations } from '../../Types/types'



interface IProps {
    label?: string,
    item?: any[],
    register?:any,
    validations?:IValidations,
    error?:FieldError,
}
const Selector: FC<IProps> = ({ label, item,register,validations={},error }) => {
    
    return (
        <SelectorWrapper>
            <TextField
                id="select"
                variant="outlined"
                helperText={!!error&&error?.message}
                error={!!error}
                label={label}
                {...register(validations?.name, validations?.conditions)}
                select>

                {item}

            </TextField>
        </SelectorWrapper>
    )
}

export default Selector

const SelectorWrapper = styled("div") <IProps>`

.MuiTextField-root{
    width: 380px;
    }

  .MuiInputLabel-outlined{
    color:inferit;
    margin-top: -1.5px;
  }
  
`