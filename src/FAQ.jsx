import React, { useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_FAQS = [
    {
        q: "How does Foto-Foto work?",
        a: "Foto-Foto is an online photobooth that you can use directly in your browser. After selecting you desired photo strip layout, you can customize your frame backgroud. Then, you can upload your photos or use your device's camera to capture a sequence of pictures to be used in your selected design. In the end, you can select a filter and download your custom creation.",
    },
    {
        q: "Are my photos stored in your servers?",
        a: "No — Your privacy is very important to us. All photos and custom designs stored in the app stay only in your browser, and are processed locally on your device. No data is uploaded to servers, and all is cleared when you close or refresh the page.",
    },
    {
        q: "How do I receive my photos?",
        a: "Your photo strip end results can be downloaded directly from our app. Currently direct download is our only method, but we have plans of expanding our features in the near future.",
    },
    {
        q: "What design options and filters are available?",
        a: "Currently, you can choose from a selection of 6 different layouts, ranging from 3 to 6 pictures. For frame backgorunds, you may choose from a selection of colors and backgrounds, or you may upload your own custom design. Our filter options include Black & White, Sepia, and Retro Film. Further options will be added in future updates.",
    },
    {
        q: "Can I retake my photos?",
        a: "It is not possible to retake individual pictures. Each photo session captures your photos in succession after a timer countdown.",
    },
];

export default function FAQ({ faqs = DEFAULT_FAQS, allowMultiple = false }) {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleIndex = (i) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
            );
        } else {
            setOpenIndexes((prev) => (prev[0] === i ? [] : [i]));
        }
    };

    const isOpen = (i) => openIndexes.includes(i);

    return (
        <section className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((item, i) => {
                    const panelId = `faq-panel-${i}`;
                    const buttonId = `faq-button-${i}`;
                    return (
                        <div key={i}
                            className="faq-item">
                            <button
                                id={buttonId}
                                aria-controls={panelId}
                                aria-expanded={isOpen(i)}
                                onClick={() => toggleIndex(i)}
                                className={
                                    isOpen(i) ? "faq-button-open"
                                            : "faq-button"
                                }
                            >
                                <span>{item.q}</span>
                                <span aria-hidden="true" className="faq-button-chev">
                                    {isOpen(i) ? "-" : "+"}
                                </span>
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                className={
                                    isOpen(i) ? "faq-panel-open"
                                            : "faq-panel"
                                }
                            >
                                <p className="faq-answer">{item.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="faq-cta">Have a different question? Don't hesitate to <Link to="/contact">leave a message!</Link></p>
        </section>
    );
}