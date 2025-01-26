```javascript
import Link from 'next/link';

function MyComponent() {
  const contactUrl = new URL('/contact', 'http://example.com');
  contactUrl.searchParams.append('name', 'John');
  contactUrl.searchParams.append('email', 'john@example.com');

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href={contactUrl.href}>
        <a>Contact</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```