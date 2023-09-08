import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <button onClick={handleClose} primary>I Accept</button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>

        </Modal>
    
    return (

        <div className='relative'>
            <Button onClick={handleClick} primary> 
            Open Modal
            </Button>
            {showModal && modal}
        </div>
    )
}