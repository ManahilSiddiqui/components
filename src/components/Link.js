import { useContext } from "react";
import NavigationContext from '../context/navigation';

export default function Link({ to, children}) {
    const {navigate} = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };

    return (

        <div>
            <a onClick={handleClick}>{children}</a>
        </div>
    )
}