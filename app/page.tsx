import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main">
      <Link href="/about">About</Link>
    </div>
  );
}
