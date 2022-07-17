import { CircularProgress, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useAppSelector } from "../../BLL/CustomReduxHooks"
import BaseInput from "../Input/Input"
import PhoneNumberInput from "../Input/PhoneNumberInput"

import NestedList from "../Selector/ISlector"
import Selector from "../Selector/Selector"

interface IFormData {
  PhoneNumber: string,
  Name: string,
  Email: string,
  ProfileLink: string,
  Organization: string,
  City: string,
  PersonIfo: string,
  Sources: string,
}
interface ISubmitProps{
  isFetching:boolean,
}

const FormBlock = () => {

  const { register, handleSubmit, control, reset, formState: { errors, isValid } } = useForm<IFormData>({
    mode: "all"
  })
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<IFormData|null>(null)
  const q = (data: IFormData) => {
    setData(data)
    setIsFetching(true)
    
    reset()
  }

  const cities = useAppSelector(state => state.main.cities)
  const sources = useAppSelector(state => state.main.sources)
  const Cities = cities?.map((c) => <MenuItem value={c.name} key={c.id}>{c.name}</MenuItem>)
  const Sources = sources?.map((s) => <MenuItem value={s} key={s}>{s}</MenuItem>)

  useEffect(() => {
    if (isFetching) {
      
      setTimeout(() => {
        setIsFetching(false)
        console.log(data)
        
      }, 2000);
    }
  }, [ isFetching,data])
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(q)}>
        <InputsBlock>
          <BaseInput register={register} validations={{ name: "Name", conditions: { required: "Поле обязательно" } }}
            error={errors.Name} placeholder="Иван" label="Ваше имя *" />
          <PhoneNumberInput control={control} register={register} error={errors.PhoneNumber}
            validations={{
              name: "PhoneNumber", conditions: {
                required: "Поле обязательноeee", minLength: { value: 10, message: "Заполните номер правильно" }
              }
            }}
            placeholder="+7(000)000-00-00" label="Номер телефона *" />

          <BaseInput register={register} error={errors.Email}
            validations={{
              name: "Email",
              conditions: {
                required: "Поле обязательно",
                pattern: { value: /.+@.+\..+/gm, message: "Поле должно соответствовать /.+@.+/..+/gm " }
              }
            }}
            placeholder="example@skdesign.ru" label="E-mail *" />

          <BaseInput register={register} error={errors.ProfileLink}
            validations={{
              name: "ProfileLink", conditions: {
                required: "Поле обязательно",
                minLength: { value: 3, message: "Минимум 3 символа" }
              }
            }}
            placeholder="instagram.com/skde…" label="Ссылка на профиль *" />
        </InputsBlock>

        <Selector item={Cities} error={errors.City} validations={{ name: "City", conditions: { required: "Поле обязательно" } }}
          register={register} label={"Выберите город *"} />

        <BaseInput fullWidth={true} placeholder="SK DESIGN"
          label={"Из какой вы организации/студии"} register={register} error={errors.Organization}
          validations={{ name: "Organization" }} />

        <NestedList>

          <BaseInput register={register} error={errors.PersonIfo}
            validations={{ name: "PersonIfo" }}
            placeholder="ФИО" fullWidth={true} label="Получатель" />

          <Selector item={Sources} error={errors.Sources} validations={{ name: "Sources" }}
            register={register} label={"Откуда про нас узнали"} />

        </NestedList>
        <SubmitButton isFetching={isFetching} disabled={!isValid}>
        
          {
            isFetching ? <CircularProgress size={30}  /> : "Отправить заявку"
          }

        </SubmitButton>
      </form>
    </FormWrapper>
  )
}

export default FormBlock

const FormWrapper = styled("div")`
padding: 40px 30px;
width: 440px;
min-height: 466px;
box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
border-radius: 8px;
form{
    width:100%;
    display:flex;
    flex-direction:column;
    gap: 20px;
    align-items:center ;

    .MuiOutlinedInput-notchedOutline{
        border-width:2px;
        border-color: #E3E3E3;
        border-radius:8px;
      }
      .MuiOutlinedInput-input{
        padding:18px 15px;
      }
      .MuiInputLabel-outlined{
        color:inferit;
        font-family: SF UI Display, sans-serif;
        font-weight:300;
        &.Mui-focused{
            color: #0086A8;
          }
          &.Mui-error{
            color:#EB5E55;
          }
      }
      
      .MuiFormHelperText-root{
        &.Mui-error{
          color:#EB5E55;
          font-size:12px;
          margin-top:8px;
          display:inline;
        }
      }
      
      .MuiOutlinedInput-root{
        height:50px;
        &.Mui-focused{
          .MuiOutlinedInput-notchedOutline{
            border-color: #0086A8!important;
          }
        }
        &.Mui-error{
          .MuiOutlinedInput-notchedOutline{
            border-color:#EB5E55!important;
        }
      }
        
      .MuiOutlinedInput-root{
        &:hover{
          .MuiOutlinedInput-notchedOutline{
            border-color:inferit;
          }
        }
      }
    
}
`


const InputsBlock = styled("div")`
width:100%;
display:flex;
justify-content:center;
column-gap:20px;
row-gap:20px;
flex-wrap:wrap;
font-family: SF UI Display, sans-serif;
.MuiTextField-root{
    width:180px;
}
`

const SubmitButton = styled("button")<ISubmitProps>`
padding: 18px 25px;
width: 380px;
height: 50px;
background: #0086A8;
border-radius: 8px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 100%;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
.MuiCircularProgress-root{
  color:white;
}
&:hover{
    background: #007693;
}
&:active{
    background: #00657E;
}
&:disabled{
  
    background: ${props => props.isFetching ? "#0086A8" : "#E3E3E3"};
    color: #828282;
}
`