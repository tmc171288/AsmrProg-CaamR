import { useState, useEffect } from "react";

export const useIntersectionObsever = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // only animate if it hasn't been animated before 
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        setHasAnimated(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id').forEach((el) => observer.observer(el));

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);
    return hasAnimated;
};