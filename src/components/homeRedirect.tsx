import * as React from 'react'
import { useNavigate  } from 'react-router-dom';
import Menu from './menu'
const HomeRedirect = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        navigate('/home')
    }, [])
    return (<>
    <Menu activePage="home"/>
    </>)
}
export default HomeRedirect