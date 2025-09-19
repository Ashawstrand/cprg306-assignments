'use client';

import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Ashley Shaw-Strand</p>
      <p>
          GitHub:{" "}
          <Link href="https://github.com/Ashawstrand/cprg306-assignments" target="_blank" rel="noopener noreferrer">
            Ashawstrand/cprg306-assignments   
          </Link>
      </p>
    </div>
    );
}