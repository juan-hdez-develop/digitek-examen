import React, {FC, useCallback} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Contact, onClickContactHandler, onClickHandler } from './types';
import { remove_item, selectItems } from "../store/selector";
import { useDispatch, useSelector } from 'react-redux'

type Params = {
    onClickEdit: onClickContactHandler
}

const ListContacts:FC<Params> = ({onClickEdit}) => {
    const dispatch = useDispatch()
    const contactos = useSelector(selectItems)

    const onClickRemove = useCallback((contact: Contact) => {
        dispatch(remove_item(contact))
    }, [dispatch])
    
    return (
        <div className='m-4'>
          {contactos.length > 0 && <table className='rounded'>
                <thead>
                    <tr className='text-white bg-slate-900'>
                        <th className='px-6 py-4'>Nombre</th>
                        <th className='px-6 py-4'>Teléfono</th>
                        <th className='px-6 py-4'>Correo</th>
                        <th colSpan={3} className='px-6 py-4'>Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {
                        contactos.map((item:Contact, index:number)=>{
                            const {name, phone, email, date} = item;
                            return (
                                <tr key={index} className='text-black bg-white hover:bg-slate-500 hover:text-white'>
                                    <td className='p-2'>{name}</td>
                                    <td className='p-2'>{phone}</td>
                                    <td className='p-2'>{email}</td>
                                    <td className='p-2 text-center'>{date}</td>
                                    <td className='p-2 text-center'><EditIcon onClick={()=> {onClickEdit(item)}} className='cursor-pointer' fontSize='small' /></td>
                                    <td className='p-2 text-center'><DeleteIcon onClick={()=> {onClickRemove(item)}} className='cursor-pointer' fontSize='small' /></td>
                                </tr>
                                )
                            })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default ListContacts