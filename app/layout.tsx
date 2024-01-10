import styleHome from "./layout.module.css"
import Navigation from "./header/index"
import Footer from "@/app/footer/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styleHome.body}>
        <Navigation />
        {children}
        <Footer />
      </body>

    </html>
  );
}
