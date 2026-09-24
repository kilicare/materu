// Focus management utilities
export const focusElement = (element: HTMLElement | null) => {
  element?.focus();
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const createFocusTrap = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  return {
    firstElement,
    lastElement,
  };
};

// Skip to main content
export const skipToMainContent = (event: React.KeyboardEvent) => {
  if (event.key === 's' && event.altKey) {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      focusElement(mainContent);
      mainContent.scrollIntoView();
    }
  }
};

// Announce to screen readers
export const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    announcement.remove();
  }, 1000);
};
