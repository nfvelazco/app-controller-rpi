import { Avatar } from '@mui/material';
import { useGetUser } from '../../services/BasicApi';

function stringAvatar(name: string) {
    const splitName = name.split(' ') 
      return `${splitName[0][0]}${splitName[1][0]}`
  }

const Header = () => {
    const {data, isSuccess} = useGetUser()
  return (
    <header className='mainHeader'>
            {isSuccess && data.userName && <Avatar>{stringAvatar(data.userName)}</Avatar>}
    </header>
  )
}

export default Header