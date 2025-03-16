import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-800 to-blue-500 h-40 w-full min-h-screen">
        <AuthProvider> 
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
