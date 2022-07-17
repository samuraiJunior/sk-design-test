import { TextField } from '@mui/material'
import styled from "styled-components";
import { FC } from 'react'
import { FieldError } from 'react-hook-form';
import { IValidations } from '../../Types/types';



interface IProps {
  fullWidth?: boolean,
  label?: string,
  placeholder?: string,
  register?: any,
  validations?: IValidations,
  error?: FieldError,
  type?:string,
}
const BaseInput: FC<IProps> = ({ fullWidth, label , placeholder, register, validations={}, error,type="text" }) => {
  
  return (
    <Wrapper fullWidth={fullWidth}>
      <TextField
        {...register(validations?.name, validations?.conditions)}
        id="outlined"
        label={label}
        helperText={!!error&&error?.message}
        error={!!error}
        type={"text"}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Wrapper>
  )
}

export default BaseInput

const Wrapper = styled("div") <IProps> `
  .MuiTextField-root{
  width:${props => props.fullWidth ? "380px" : "180px"};
  }
  
`
