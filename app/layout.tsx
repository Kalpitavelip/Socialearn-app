import "./globals.css";

export const metadata = {
  title: "SociaLEarn",
  description: "The Social Medium of Learning",
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