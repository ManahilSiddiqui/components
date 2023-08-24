import { GoBell, GoDatabase } from 'react-icons/go';
import Button from './Button';

export default function App() {

    return (

        <div>

            <div>
                <Button success rounded outline> <GoBell /> Click me</Button>
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