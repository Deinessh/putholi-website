import type { Metadata } from 'next';
import ReferencesSection from '../components/sections/ReferencesSection';

export const metadata: Metadata = {
  title: 'News & Reports | Putholi Empowerment Society',
};

export default function References() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <ReferencesSection />
    </div>
  );
}
