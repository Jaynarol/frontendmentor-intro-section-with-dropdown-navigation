import Link from 'next/link'
import { PiBellFill, PiCalendarFill, PiNotepadFill, PiTargetFill } from 'react-icons/pi'

const TopMenu = () => (
  <ul className="menu menu-horizontal ml-5 hidden gap-3 text-secondary md:inline-flex">
    <li>
      { /* eslint-disable-next-line tailwindcss/classnames-order */ }
      <details className="dropdown-end dropdown-bottom dropdown">
        <summary>Features</summary>
        <ul className="menu dropdown-content !mt-0 w-36 rounded-md bg-white text-xs shadow-2xl">
          <li>
            <Link href="./">
              <PiNotepadFill className="h-4 w-4 text-blue-500" />
              Todo List
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiCalendarFill className="h-4 w-4 text-purple-400" />
              Calendar
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiBellFill className="h-4 w-4 text-yellow-400" />
              Reminders
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiTargetFill className="h-4 w-4 text-purple-800" />
              Planning
            </Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details className="dropdown">
        <summary>Company</summary>
        <ul className="menu dropdown-content !mt-0 rounded-md bg-white text-xs shadow-2xl">
          <li><Link href="./">History</Link></li>
          <li><Link href="./">Our Team</Link></li>
          <li><Link href="./">Blog</Link></li>
        </ul>
      </details>
    </li>
    <li><Link href="./">Careers</Link></li>
    <li><Link href="./">About</Link></li>
  </ul>
)

export default TopMenu
