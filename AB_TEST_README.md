# A/B Testing Setup

This site now includes A/B testing functionality to test different versions of the "How I Help" section.

## Current Test: Services Hover Effect

**Test Name:** `services_hover_effect`

### Variants:
- **Variant A (50%)**: Current hover effect with blue background and border
- **Variant B (50%)**: Top border highlight effect on hover

### How it works:
1. Users are randomly assigned to one of the two variants
2. The assignment is stored in localStorage so users see consistent experience
3. Analytics events are tracked (ready for Google Analytics integration)

### Viewing the A/B Test Dashboard:
- **Development mode**: Dashboard is automatically visible in bottom-right corner
- **Production**: Add `?ab_dashboard=true` to the URL to view dashboard

### Dashboard Features:
- Shows current test configuration
- Displays your assigned variant
- Reset button to clear assignment and get reassigned

### Files Created:
- `src/hooks/useABTest.ts` - Core A/B testing hook
- `src/components/ABTestWrapper.tsx` - Wrapper component for A/B tests
- `src/components/ProjectsVariantA.tsx` - Current hover effect
- `src/components/ProjectsVariantB.tsx` - Top border highlight effect
- `src/components/ABTestDashboard.tsx` - Dashboard for monitoring tests

### Analytics Integration:
The system is ready to integrate with Google Analytics. Events are tracked for:
- `ab_test_assignment` - When a user is assigned to a variant
- `ab_test_conversion` - When a user performs a conversion action

### Adding New Tests:
1. Create variant components
2. Use `ABTestWrapper` in your component tree
3. Configure test name, variants, and weights
4. Track conversions using `trackABTestConversion()`

### Example Usage:
```jsx
<ABTestWrapper
  config={{
    testName: 'my_test',
    variants: ['control', 'treatment'],
    weights: [50, 50]
  }}
  variants={{
    control: <ControlComponent />,
    treatment: <TreatmentComponent />
  }}
/>
```