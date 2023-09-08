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
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p><p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Morbi pellentesque at dolor 
            bibendum pellentesque. Vestibulum 
            sodales libero sed arcu semper vehicula. Nunc vitae euismod ante, in interdum nisl. Suspendisse blandit sem vel ante sollicitudin bibendum. Etiam suscipit orci a congue aliquam. Duis euismod pulvinar vulputate. Mauris malesuada arcu augue, sit amet congue mi scelerisque sed. Mauris faucibus ex id turpis efficitur tempor at quis turpis. Etiam vulputate metus non mauris gravida, eget sollicitudin velit varius. Vestibulum libero magna, accumsan id aliquam eu, rutrum a eros. Proin non tortor egestas lorem efficitur ultrices id quis tortor. Nulla facilisi. Sed ac lacus ut tellus scelerisque venenatis id sit amet elit. Nulla ullamcorper a enim in vulputate. 
            </p>

        </div>
    )
}