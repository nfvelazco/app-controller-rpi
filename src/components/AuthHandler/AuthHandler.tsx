import {renderRedirect} from '../../utilities/utils'
import { useGetUser } from '../../services/BasicApi'
import { ReactNode } from "react";

interface Props {
    children? : ReactNode
}

const AuthHandler = ({children}:Props) => {
    
    const { isSuccess, isError, isLoading } = useGetUser()
    
    
    return (
        <>
            {isLoading &&  <div>Loading</div>}
            {isSuccess && <>{children}</>}
            {/* {isError && renderRedirect() } */}
        </>
    )
}
export default AuthHandler