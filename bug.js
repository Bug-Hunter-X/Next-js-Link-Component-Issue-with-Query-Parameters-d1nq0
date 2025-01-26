```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact?name=John&email=john@example.com">
        <a>Contact</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```