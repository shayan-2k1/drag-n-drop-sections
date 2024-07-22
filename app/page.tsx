'use client';
import { useState } from 'react';
import Testimonials from '@/app/components/Testimonial';
import AboutUs from '@/app/components/AboutUs';

const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [sections, setSections] = useState([
        { id: 'testimonials', content: <Testimonials /> },
        { id: 'aboutUs', content: <AboutUs /> },
    ]);

    const [isDraggable, setIsDraggable] = useState(false);

    const toggleDraggable = () => {
        setIsDraggable(!isDraggable);
    };

    const onDragStart = (event, index) => {
        if (!isDraggable) return;
        event.dataTransfer.setData("sectionIndex", index);
    };

    const onDrop = (event, dropIndex) => {
        if (!isDraggable) return;
        const dragIndex = event.dataTransfer.getData("sectionIndex");
        const items = Array.from(sections);
        const [draggedItem] = items.splice(dragIndex, 1);
        items.splice(dropIndex, 0, draggedItem);
        setSections(items);
    };

    const onDragOver = (event) => {
        if (!isDraggable) return;
        event.preventDefault();
    };

    // const handleToggle = () => {
    //     setToggle((toggle)=>!toggle);
    // };

    return (
        <div>
            <button
                onClick={toggleDraggable}
                style={{
                    display: 'block',
                    margin: '20px auto',
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontSize: '16px'
                }}
            >            
                {isDraggable ? "Disable Dragging" : "Enable Dragging"}
            </button>
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    draggable={isDraggable}
                    onDragStart={(event) => onDragStart(event, index)}
                    onDrop={(event) => onDrop(event, index)}
                    onDragOver={(event) => onDragOver(event)}
                    style={{
                        margin: '20px 0',
                        padding: '10px',
                        background: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        cursor: isDraggable ? 'move' : 'default',
                    }}
                >
                    <h2 className='text-black text-center text-3xl'>{section.id === 'testimonials' ? 'Testimonials' : 'About Us'}</h2>
                    {!isDraggable && section.content}
                </div>
            ))}
        </div>
    );
};

export default Home;
