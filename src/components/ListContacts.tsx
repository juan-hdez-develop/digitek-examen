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
        <div className='m-4 text-xs'>
          {contactos.length > 0 && <table className='shadow-xl'>
                <thead className='text-center'>
                    <tr className='text-white bg-gray-700'>
                        <th className='px-1 py-2 rounded-tl-lg'>Nombre</th>
                        <th className='px-1 py-2'>Teléfono</th>
                        <th className='px-1 py-2 hidden md:inline-flex'>Correo</th>
                        <th colSpan={3} className='px-2 py-1 rounded-tr-lg text-left'>Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {
                        contactos.map((item:Contact, index:number)=>{
                            const {name, phone, email, date} = item;
                            return (
                                <tr key={index} className='text-black bg-white hover:bg-slate-500 hover:text-white group'>
                                    <td className='p-2 '>{name}</td>
                                    <td className='p-2'>{phone}</td>
                                    <td className='p-2 hidden md:inline-flex'>{email}</td>
                                    <td className='p-2 text-right'>{date}</td>
                                    <td className='p-2 text-center'><EditIcon onClick={()=> {onClickEdit(item)}} className='cursor-pointer md:invisible group-hover:visible' fontSize='small' /></td>
                                    <td className='p-2 text-center'><DeleteIcon onClick={()=> {onClickRemove(item)}} className='cursor-pointer md:invisible group-hover:visible' fontSize='small' /></td>
                                </tr>
                                )
                            })
                    }
                </tbody>
                <tfoot className='bg-white'>
                    <tr>
                        <td colSpan={6} className='rounded-b-lg'></td>
                    </tr>
                </tfoot>
            </table>}
        </div>
    )
}

export default ListContacts