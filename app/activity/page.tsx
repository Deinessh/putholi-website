import type { Metadata } from 'next';
import ActivitiesSection from '../components/sections/ActivitiesSection';

export const metadata: Metadata = {
  title: 'Activities | Putholi Empowerment Society',
};

export default function Activities() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <ActivitiesSection />
    </div>
  );
}
