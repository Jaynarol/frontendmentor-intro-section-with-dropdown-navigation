import Link from 'next/link'
import { PiBellFill, PiCalendarFill, PiNotepadFill, PiTargetFill } from 'react-icons/pi'

const DrawerMenu = () => (
  <ul className="menu text-sm [&_a]:pl-1 [&_summary]:pl-1">
    <li>
      <details>
        <summary className="after:justify-self-start">Features</summary>
        <ul className="before:w-0">
          <li>
            <Link href="./">
              <PiNotepadFill className="h-5 w-5 text-blue-500" />
              Todo List
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiCalendarFill className="h-5 w-5 text-purple-400" />
              Calendar
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiBellFill className="h-5 w-5 text-yellow-400" />
              Reminders
            </Link>
          </li>
          <li>
            <Link href="./">
              <PiTargetFill className="h-5 w-5 text-purple-800" />
              Planning
            </Link>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary className="after:justify-self-start">Company</summary>
        <ul className="before:w-0">
          <li><Link href="./">History</Link></li>
          <li><Link href="./">Our Team</Link></li>
          <li><Link href="./">Blog</Link></li>
        </ul>
      </details>
    </li>
    <li><Link href="./">Carrers</Link></li>
    <li><Link href="./">About</Link></li>
  </ul>
)

export default DrawerMenu
