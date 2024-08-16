import "./globals.css";
import MainHeader from "@/Components/MainHeader";


export const metadata = {
  title: "NextNews",
  description: "Next News for Next Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MainHeader/>
      {children}
      </body>
    </html>
  );
}
