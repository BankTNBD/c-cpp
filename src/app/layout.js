import "@/app/globals.css";

export const metadata = {
  title: "C-Cpp",
  description: "c-cpp.iambanky.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
