import { GoBell, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

export default function ButtonPage() {
    const handleClick = () => {};
    
    return (

        <div>

            <div>
                <Button secondary outline rounded className="mb-5" onClick={handleClick}> <GoBell /> Click me</Button>
            </div>

            <div>
                <Button danger outline> Buy now</Button>
            </div>

            <div>
                <Button warning > <GoDatabase /> See Deal </Button>
            </div>

            <div>
                <Button secondary outline> Hide Ads</Button>
            </div>

            <div>
                <Button primary rounded> Something</Button>
            </div>

        </div>
    )
}