'use client';
import { useState } from 'react';
import Testimonials from '@/app/components/Testimonial';
import AboutUs from '@/app/components/AboutUs';

const Home = () => {
    const [sections, setSections] = useState([
        { id: 'testimonials', content: <Testimonials /> },
        { id: 'aboutUs', content: <AboutUs /> },
    ]);

    const onDragStart = (event, index) => {
        event.dataTransfer.setData("sectionIndex", index);
    };

    const onDrop = (event, dropIndex) => {
        const dragIndex = event.dataTransfer.getData("sectionIndex");
        const items = Array.from(sections);
        const [draggedItem] = items.splice(dragIndex, 1);
        items.splice(dropIndex, 0, draggedItem);
        setSections(items);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    draggable
                    onDragStart={(event) => onDragStart(event, index)}
                    onDrop={(event) => onDrop(event, index)}
                    onDragOver={(event) => onDragOver(event)}
                    style={{
                        margin: '20px 20px',
                        padding: '10px',
                        background: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                    }}
                >
                    {section.content}
                </div>
            ))}
        </div>
    );
};

export default Home;
