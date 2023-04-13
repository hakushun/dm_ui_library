import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/ui1">ui1</Link>
          </li>
          <li>
            <Link href="/ui2">ui2</Link>
          </li>
          <li>
            <Link href="/ui3">ui3</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
