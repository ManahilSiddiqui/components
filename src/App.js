import Accordion from './components/Accordion';

export default function App() {
    const items= [
        {
            id:'12kj5',
            label: "Can I use React on a project?",
            content: ' You can use React on any project you wantYou can use React on any project you want You can use React on any project you want'
        },
        {
            id: 'lk2j35lkj',
            label: 'Can I use Javascript on a project',
            content: 'You can use Javascript on any project you want You can use Javascript on any project you wantYou can use Javascript on any project you want '
        },
        {
            id: 'l1kj2i0g',
            label: 'Can I use CSS on a project?',
            content:'You can use CSS on any project you wantYou can use CSS on any project you want You can use CSS on any project you want '
        }
    ];

    return (

        <div>
           

            <Accordion items={items} />

        </div>
        
    )
}