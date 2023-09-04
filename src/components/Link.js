import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from '../context/navigation';

export default function Link({ to, children}) {
    const {navigate} = useContext(NavigationContext);

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    return (

        <div>
            <a className={classes} href={to} onClick={handleClick}>
                {children}
                </a>
        </div>
    )
}