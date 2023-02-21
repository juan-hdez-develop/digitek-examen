import React, {FC, useCallback, useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventIcon from '@mui/icons-material/Event';
import { Button, InputAdornment, TextField } from "@mui/material";
import {Contact, initialState, onClickHandler} from './types'
import { add_item, update_item, incrementIndex, selectIndex } from "../store/selector"; 
import { useDispatch, useSelector } from 'react-redux'

type Params = {
    contact?: Contact,
    onClickClose: onClickHandler,
    isNew: boolean
}

const FormContact: FC<Params> = ({contact = initialState, onClickClose, isNew}) => {
    const dispatch = useDispatch()
    const [contactSate, setContact] = useState(contact);
    const index = useSelector(selectIndex)

    const onChangeHandler = (name: string, value: string) => setContact(prevState => ({ ...prevState, [name]: value }));

    const onSubmit = useCallback(
        (e:any) => {
            e.preventDefault() 
            if(isNew)
            {
                dispatch(add_item({...contactSate, index}))
                dispatch(incrementIndex())
            }
            else{
                dispatch(update_item({...contactSate}))
            }
             setContact(initialState)
             onClickClose()
        },
        [contactSate, dispatch, index, isNew, onClickClose],
    )    
    return (
        <div className="w-80 border rounded-lg bg-white">
            <div className="text-center font-bold mr-6 mt-4"><h1>Formulario</h1></div>
            <form onSubmit={(e)=> {onSubmit(e)}}>
            <div className="flex px-2 flex-col mt-4 w-full juditfy-center">
                <div className="hidden">
                  <TextField  type={'hidden'} value={index} />
                </div>
                <div className="mt-4 w-full">
                        <TextField value={contactSate.name} onChange={e => onChangeHandler(e.target.name, e.target.value)} size="small" className="w-full" required type={'text'} id="name" name="name" label="Nombre" variant="filled"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircleIcon fontSize="small" />
                              </InputAdornment>
                            )
                          }}
                        />
                </div>
                <div  className="mt-4 w-full">
                    <TextField value={contactSate.email} onChange={e => onChangeHandler(e.target.name, e.target.value)} size="small" className="w-full" required type={'email'} id="email" name="email" label="Email" variant="filled"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon fontSize="small" />
                              </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div className="mt-4 w-full">
                    <TextField value={contactSate.phone} onChange={e => onChangeHandler(e.target.name, e.target.value)} size="small" className="w-full" required type={'tel'} id="phone" name="phone" label="Telefono" variant="filled"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocalPhoneIcon fontSize="small" />
                              </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div className="mt-4 w-full">
                <TextField value={contactSate.date} onChange={e => onChangeHandler(e.target.name, e.target.value)} size="small" className="w-full" required type={'date'} id="date" name="date" label="Fecha de nacimiento" variant="filled"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EventIcon fontSize="small" />
                              </InputAdornment>
                            )
                        }}
                    />
                </div>
            </div>   
            <div className="flex justify-between mx-6 my-8">
                <Button type="submit" variant="contained">Guardar</Button>
                <Button onClick={onClickClose} variant="outlined">Cancelar</Button>
            </div>
            </form>
        </div>
    )
}

export default FormContact;