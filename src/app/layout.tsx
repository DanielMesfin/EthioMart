import Link from "next/link";
import { Home, ShoppingBag, FileText, User } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <nav className="fixed bottom-0 left-0 right-0 border-t">
          <div className="flex justify-around items-center h-16">
            <Link href="/" className="flex flex-col items-center">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/store" className="flex flex-col items-center">
              <ShoppingBag size={24} />
              <span className="text-xs mt-1">Store</span>
            </Link>
            <Link href="/order" className="flex flex-col items-center">
              <FileText size={24} />
              <span className="text-xs mt-1">Order</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center">
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </nav>
      </body>
    </html>
  );
}
