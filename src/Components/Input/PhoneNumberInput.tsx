//@ts-nocheck
import { TextField } from "@mui/material"
import React, { FC } from "react"
import { Controller, FieldError } from "react-hook-form"
import InputMask from "react-input-mask"
import { IValidations } from "../../Types/types"
import BaseInput from "./Input"

interface IProps {
  fullWidth?: boolean,
  label?: string,
  placeholder?: string,
  register?: any,
  validations?: IValidations
  error?: FieldError,
  control?:any,
}
const PhoneNumberInput:FC<IProps> = ({fullWidth, label , placeholder, register, validations={}, error, control}) => {
  return (
    <Controller
    name={validations?.name}
    control={control}
    defaultValue=""
    {...register(validations?.name, validations?.conditions)}
    render={({ field: { onChange, value } }) => (
        <InputMask mask="+7-999-999-99-99" minLength={validations?.conditions.minLength} value={value} onChange={onChange}>
            {
                inputProps => (
                    <TextField
                        inputRef={register(validations?.name, validations?.conditions)}
                        label={label}
                        helperText={!!error&&error?.message}
                        error={!!error}
                        variant="outlined"
                        type="text"
                        placeholder={placeholder}
                        {...inputProps}
                        InputLabelProps={{
                          shrink: true,
                        }}
                    />
                )
            }
        </InputMask>
    )}
/>
  )
}

export default PhoneNumberInput
