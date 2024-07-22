// src/components/Testimonials.js
const Testimonials = () => {
    const testimonialsData = [
        { id: 1, text: "Customer A: This product is amazing!" },
        { id: 2, text: "Customer B: I would recommend this to everyone." },
        { id: 3, text: "Customer C: Excellent service and quality." },
        { id: 4, text: "Customer D: Outstanding experience!" },
        { id: 5, text: "Customer E: Very satisfied with my purchase." },
        { id: 6, text: "Customer F: Highly professional and reliable." },
        { id: 7, text: "Customer G: Great value for the price." },
        { id: 8, text: "Customer H: Fantastic customer support." },
        { id: 9, text: "Customer I: Will definitely buy again!" },
        { id: 10, text: "Customer J: Five stars all around." }
    ];

    return (
        <div style={{ padding: '20px', border: '1px solid' }} className="text-black text-center">
            {/* <h2 className="text-3xl underline">Testimonials</h2> */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} >
                {testimonialsData.map((testimonial) => (
                    <div 
                        key={testimonial.id} 
                        style={{
                            padding: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                            flex: '1 0 30%',
                            minWidth: '200px',
                        }}
                        className="hover:scale-[1.03] transition-transform duration-300"
                    >
                        {testimonial.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
