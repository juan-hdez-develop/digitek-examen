
import React, {FC, useState} from "react"
import ReplyIcon from '@mui/icons-material/Reply';
import { Agenda } from '../assets/img'
import { Button, Dialog, IconButton } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@mui/material';
import ListContacts from "../components/ListContacts";
import FormContact from "../components/FormContact";
import {Contact, initialState, onClickContactHandler, onClickHandler} from '../components/types'
import { Provider, useSelector } from 'react-redux'
import { store } from '../store/index';


const Notebook: FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [contact, setContact] = useState(initialState);
    const [isNew, setIsNew] =  useState(true);
   

    const onClickEdit: onClickContactHandler = (contact: Contact) => {
        setIsNew(false)
        setOpenDialog(true)
        setContact(contact)
    }

    const onClickNew: onClickHandler = () => {
        setIsNew(true)
        setOpenDialog(true)
        setContact(initialState)
    }

    const onClose: onClickHandler = () => {
        setOpenDialog(false)
        setContact(initialState)
    }

    return (
        <div className="flex flex-col w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <header className="flex bg-blue-700 justify-between px-4">
                <div className="flex items-center"> 
                    <img className='flex w-10' src={Agenda} alt="notebook" />
                    <div className="flex ml-4 text-xl font-weight-bold text-white">Bienvenido a AgendaApp</div>
                </div>
                <div className="flex px-4 my-6 rounded-3xl bg-white">
                <Link className='flex text-5xl' variant="body2" color="textPrimary" aria-label="agenda" component={RouterLink} to={'/digitek-examen'}>
                    <IconButton color="inherit" aria-label="delete"><ReplyIcon /></IconButton>
                </Link>
                </div>
            </header>
            <main className="flex flex-col mt-8 w-full items-center justify-center">
                <div className="flex">
                    <Button onClick={onClickNew} variant="contained">Agregar</Button>
                </div>
                <div className="flex">
                    <Provider store={store}>
                    <ListContacts onClickEdit={onClickEdit} />
                    </Provider> 
                </div>
                <Dialog open={openDialog} onClose={onClose}>
                    <Provider store={store}>
                    <FormContact isNew={isNew} contact={contact} onClickClose={onClose} />     
                    </Provider>    
                </Dialog>
            </main>
           
        </div>
    )
    
} 
export default Notebook;