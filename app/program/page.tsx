import type { Metadata } from 'next';
import ProgramSection from '../components/sections/ProgramSection';

export const metadata: Metadata = {
  title: 'Program | Putholi Empowerment Society',
};

export default function Program() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <ProgramSection />
    </div>
  );
}
