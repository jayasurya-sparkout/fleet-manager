import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to get started into the fleet manager",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
