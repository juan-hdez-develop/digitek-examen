import { Agenda } from '../assets/img'
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@mui/material';

function Welcome() {
  return (
    <div className="flex w-full h-screen mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 justify-center">
      <div className='flex flex-col m-auto shadow-2xl py-4 px-16 rounded-xl items-center bg-white '>
        <div className="flex flex-col items-center ">
            <img className='flex w-40' src={Agenda} alt="notebook" />
            <div className='flex ml-4 font-bold text-blue-800 text-3xl sm:text-4xl text-center'>
              Bienvenido <br /> Agenda App
            </div>
        </div>
        <div className='flex justify-center mt-8 '>
            <Link fontSize={24} variant="button" color="textPrimary" aria-label="agenda" component={RouterLink} to={'/notebook'}>
                      Empezar
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
