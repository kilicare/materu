# MATERU Website — QA Testing Guide

## Testing Checklist

### Phase 1: Functional Testing

- [ ] All buttons navigate to correct URLs
- [ ] All forms submit without errors
- [ ] Hero text reveals properly
- [ ] Solution cards update on click
- [ ] Process section updates on scroll
- [ ] Mobile menu opens/closes
- [ ] All images load correctly

### Phase 2: Responsive Testing

**Mobile (390px)**
- [ ] Text readable without zooming
- [ ] Buttons touchable (44px+ height)
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Navigation accessible

**Tablet (768px)**
- [ ] Layout reflows correctly
- [ ] Typography scales properly
- [ ] Images display optimally

**Desktop (1024px)**
- [ ] Full multi-column layouts visible
- [ ] Animations smooth
- [ ] Hover effects work

**Large Desktop (1440px)**
- [ ] Content centered
- [ ] Max-width constraints respected
- [ ] Spacing proportional

### Phase 3: Performance Testing

1. Run Lighthouse audit
```bash
pnpm build
pnpm start
```
Visit: https://pagespeed.web.dev

2. Check Core Web Vitals  
- LCP (Largest Contentful Paint): < 2.5s  
- FID (First Input Delay): < 100ms  
- CLS (Cumulative Layout Shift): < 0.1

3. Bundle analysis  
```bash
pnpm analyze
```

### Phase 4: Accessibility Testing

**Keyboard Navigation**  
- [ ] Tab through all elements  
- [ ] Shift+Tab goes backward  
- [ ] No keyboard traps  
- [ ] Focus states visible

**Screen Reader (NVDA/VoiceOver)**  
- [ ] Page reads logically  
- [ ] Images have alt text  
- [ ] Form labels announced  
- [ ] Links identified properly

**Color Contrast**  
- [ ] All text ≥ 4.5:1 ratio  
- [ ] Text on images readable  
- [ ] No color-only indicators

### Phase 5: Cross-Browser Testing

- [ ] Chrome (latest)  
- [ ] Firefox (latest)  
- [ ] Safari (latest)  
- [ ] Edge (latest)  
- [ ] Mobile Safari (iOS)  
- [ ] Chrome Mobile (Android)

### Phase 6: Device Testing

Test on actual devices:  
- iPhone 12/13/14  
- Samsung Galaxy S21/S22  
- iPad Pro  
- MacBook Pro  
- Windows Desktop

## Performance Targets

- Lighthouse Performance: ≥ 90  
- Lighthouse Accessibility: ≥ 90  
- Lighthouse Best Practices: ≥ 90  
- Lighthouse SEO: ≥ 95  
- LCP: < 2.5s  
- FID: < 100ms  
- CLS: < 0.1

## Reporting Issues

Format: `[Device] [Browser] [Issue Description] [Steps to Reproduce]`

Example: `[iPhone 12] [Safari] Hero text overlaps on scroll [Scroll down on homepage]`
