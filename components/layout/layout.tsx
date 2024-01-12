// Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your common layout components (header, footer, etc.) */}
      <header>
        <h1>Your Site</h1>
      </header>
      {/* Page content */}
      <main>{children}</main>
      {/* Your common layout components (footer, etc.) */}
      <footer>
        <p>&copy; 2022 Your Site</p>
      </footer>
    </div>
  );
};

export default Layout;
