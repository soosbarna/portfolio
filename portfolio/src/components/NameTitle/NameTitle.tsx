import { PROFILE_NAME, PROFILE_SURNAME, PROFILE_TITLE } from './NameTitle.const';
import './NameTitle.css';

export function NameTitle() {
  return (
    <>
      <span style={{
        borderBottom:'4px solid #111',
        fontWeight: '700',
        fontSize: '4rem',
        letterSpacing: '0.05em',
        color: '#111',
        display: 'block',
      }}>
        {PROFILE_SURNAME}
      </span>

      <span style={{
        fontSize: '4rem',
        fontWeight: '700',
        color: '#111',
        display: 'block',
      }}>
        {PROFILE_NAME}
      </span>

      {PROFILE_TITLE}
    </>
  );
} 