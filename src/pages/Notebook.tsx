
import {FC, useState} from "react"
import ReplyIcon from '@mui/icons-material/Reply';
import { Agenda } from '../assets/img'
import { Button, Dialog, IconButton } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@mui/material';
import ListContacts from "../components/ListContacts";
import FormContact from "../components/FormContact";
import {Contact, initialState, onClickContactHandler, onClickHandler} from '../components/types'

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
        <div className="flex flex-col w-full h-screen bg-gradient-to-r from-blue-100 to-blue-200">
            <header className="flex bg-black justify-between px-4 shadow-xl">
                <div className="flex items-center"> 
                    <img className='flex w-10' src={Agenda} alt="notebook" />
                    <div className="flex ml-4 text-xl font-weight-bold text-white">Bienvenido a Agenda App</div>
                </div>
                <div className="flex px-4 my-6 rounded-3xl bg-white">
                <Link className='flex text-5xl' variant="body2" color="textPrimary" aria-label="agenda" component={RouterLink} to={'/digitek-examen'}>
                    <IconButton color="inherit" aria-label="delete"><ReplyIcon /></IconButton>
                </Link>
                </div>
            </header>
            <main className="flex flex-col mt-8 w-full items-center justify-center">
                <div className="flex shadow-xl">
                    <Button onClick={onClickNew} variant="contained">Agregar</Button>
                </div>
                <div className="flex">
                    <ListContacts onClickEdit={onClickEdit} />
                </div>
                <Dialog open={openDialog} onClose={onClose}>
                    <FormContact isNew={isNew} contact={contact} onClickClose={onClose} />     
                </Dialog>
            </main>
           
        </div>
    )
    
} 
export default Notebook;