import React, { useEffect, useState } from 'react'

export default function useView(id) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = document.getElementById(id);
        if (!section) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            })
        },
            { threshold: 0.5 }
        )
        observer.observe(section);
        return () => observer.disconnect()
    }, [id])
    return isVisible
}


