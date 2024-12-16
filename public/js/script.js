const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const sliderScrollbar = document.querySelector(".portfolio-img .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth; 

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));

            scrollbarThumb.style.left = `${boundedPosition}px`;
            
            // Update the image list scroll position
            const scrollPercentage = boundedPosition / maxThumbPosition;
            imageList.scrollLeft = scrollPercentage * maxScrollLeft;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for mouse move and mouse up
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }
    
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });

    // Call initSlider when the page loads
    window.addEventListener("load", initSlider);
}

// Call the function
initSlider();