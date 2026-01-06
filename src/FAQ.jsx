import React, { useState } from "react";

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
        <section className="frequently-asked" style={styles.container}>
            <h2 style={styles.title}>Frequently Asked Questions</h2>
            <div style={styles.list}>
                {faqs.map((item, i) => {
                    const panelId = `faq-panel-${i}`;
                    const buttonId = `faq-button-${i}`;
                    return (
                        <div key={i} style={styles.item}>
                            <button
                                id={buttonId}
                                aria-controls={panelId}
                                aria-expanded={isOpen(i)}
                                onClick={() => toggleIndex(i)}
                                style={{
                                    ...styles.button,
                                    ...(isOpen(i) ? styles.buttonOpen : {}),
                                }}
                            >
                                <span>{item.q}</span>
                                <span aria-hidden="true" style={styles.chev}>
                                    {isOpen(i) ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                style={{
                                    ...styles.panel,
                                    maxHeight: isOpen(i) ? 200 : 0,
                                    padding: isOpen(i) ? "12px 16px" : "0 16px",
                                    opacity: isOpen(i) ? 1 : 0,
                                }}
                            >
                                <p style={styles.answer}>{item.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

const styles = {
    container: {
        maxWidth: 800,
        margin: "24px auto",
        padding: "0 16px",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#111827",
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
    },
    list: {
        borderTop: "1px solid #e5e7eb",
    },
    item: {
        borderBottom: "1px solid #e5e7eb",
    },
    button: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        background: "white",
        border: "none",
        padding: "16px",
        textAlign: "left",
        cursor: "pointer",
        fontSize: 16,
    },
    buttonOpen: {
        background: "#f9fafb",
    },
    chev: {
        marginLeft: 12,
        fontSize: 20,
        lineHeight: 1,
        width: 20,
        textAlign: "center",
    },
    panel: {
        overflow: "hidden",
        transition: "max-height 220ms ease, opacity 200ms ease, padding 200ms ease",
        background: "white",
    },
    answer: {
        margin: 0,
        fontSize: 15,
        color: "#374151",
    },
};