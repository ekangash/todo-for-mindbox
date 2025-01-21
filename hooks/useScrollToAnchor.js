/**
 * @param offset
 */
export const useScrollToAnchor = (offset = 0) => {
    return (targetHashAnchor) => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        const targetElement = document.querySelector(`${targetHashAnchor}`);
        const startWithHashRegex = /^#\w+/g;
        if (!startWithHashRegex.test(targetHashAnchor) || !targetElement) {
            return;
        }
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        requestAnimationFrame(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        });
    };
};
