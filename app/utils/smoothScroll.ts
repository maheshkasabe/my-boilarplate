/**
 * Utility function to enable smooth scrolling for anchor links
 * This function should be called on the client side after the component is mounted
 */
export function initSmoothScroll() {
  // Handle click events on anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    
    // Check if the click was on an anchor link or its parent
    const link = target.tagName === 'A' 
      ? target 
      : target.closest('a');
    
    if (!link) return;

    const href = link.getAttribute('href');
    
    // Only handle internal anchor links that start with #
    if (!href || !href.includes('#')) return;
    
    // If it's a combined path with a hash (e.g., /about#team)
    // Only process it if we're already on the right page
    if (href.startsWith('/')) {
      const [path, hash] = href.split('#');
      const currentPath = window.location.pathname;
      
      // If we're not on the right page, let normal navigation happen
      if (path !== currentPath && path !== '') return;
      
      // If we are on the right page, scroll to the element
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        e.preventDefault();
        scrollToElement(targetElement);
      }
    } 
    // If it's a pure anchor link (e.g., #team)
    else if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        scrollToElement(targetElement);
      }
    }
  });
}

/**
 * Helper function to scroll to an element with a smooth animation
 */
function scrollToElement(element: HTMLElement) {
  // Get the header height to offset the scroll position
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  
  // Calculate the final scroll position, accounting for the header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra padding
  
  // Scroll smoothly to the element
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
} 