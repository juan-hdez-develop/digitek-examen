import { Agenda } from '../assets/img'
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@mui/material';

function Welcome() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 justify-center">
      <div className="flex flex-col w-full items-center">
        <img className='flex w-40' src={Agenda} alt="notebook" />
        <div className='flex ml-4 text-white text-5xl'>
          Bienvenido a AgendaApp
        </div>
      </div>
      <div className='flex justify-center mt-8'>
          <Link className='text-5xl' variant="body2" color="textPrimary" aria-label="agenda" component={RouterLink} to={'/notebook'}>
                    Empezar
          </Link>
      </div>
    </div>
  );
}

export default Welcome;
