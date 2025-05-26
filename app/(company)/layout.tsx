import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bumi Indah',
    template: '%s: Mewujudkan Kesehatan yang Lebih Baik | bumiindah',
  },
  description: 'Melayani lebih dari tiga dekade',
  openGraph: {
    title: 'Mewujudkan Kesehatan yang Lebih Baik',
    description: 'Melayani lebih dari tiga dekade',
    type: 'website',
    locale: 'id_ID',
    siteName: 'bumiindah',
    images: [
      {
        url: 'https://bumiindah.vercel.app/images/logo.png',
      },
    ],
  },
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
