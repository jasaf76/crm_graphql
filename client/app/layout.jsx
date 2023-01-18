import "app/globals.css";

import { Navigation } from "app/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body >
        <div className="py-8">
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
