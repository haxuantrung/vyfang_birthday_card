import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://happy-birthday-vyfang.vercel.app";
const SITE_TITLE = "Gửi Vyfang — Mừng Sinh Nhật Pé Nhóc của Anh";
const SITE_DESCRIPTION =
  "Một vũ trụ nhỏ được làm riêng cho Vyfang — nơi mỗi vì sao là một kỷ niệm của chúng mình.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Gửi Vyfang",
    locale: "vi_VN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gửi Vyfang — Mừng Sinh Nhật Pé Nhóc của Anh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#120B2D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
