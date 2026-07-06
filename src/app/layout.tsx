import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ekhope | The Voice of the Voiceless',
  description: 'Ekhope is an animal rescue organization giving a powerful voice to the voiceless and creating a kinder world, one rescue at a time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
