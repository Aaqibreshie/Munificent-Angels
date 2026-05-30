export const metadata = {
  title: 'Munificient Angels Studio',
  description: 'Sanity Studio for Munificient Angels CMS',
};

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
