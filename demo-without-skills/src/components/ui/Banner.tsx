import { Button } from './Button';
import './Banner.css';

export interface BannerProps {
  state?: 'contact';
  viewport?: 'desktop' | 'mobile';
  /** Short lead-in shown above the person's name. */
  title: string;
  name: string;
  jobTitle: string;
  /** Photo URL; when omitted an initials avatar is shown. */
  avatarUrl?: string;
  /** Accessible alt text for the photo. */
  avatarAlt?: string;
  /** Shows the call-to-action button. */
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Banner — maps to the Figma `profileBanner` (Banner) component.
 * A horizontal expert card with avatar, title/name/role and an optional CTA.
 */
export function Banner({
  viewport = 'desktop',
  title,
  name,
  jobTitle,
  avatarUrl,
  avatarAlt = '',
  showAction = false,
  actionLabel = 'Planifiez un échange',
  onAction,
}: BannerProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div className={`fg-banner fg-banner--${viewport}`}>
      <div className="fg-banner__person">
        {avatarUrl ? (
          <img className="fg-banner__avatar" src={avatarUrl} alt={avatarAlt} />
        ) : (
          <span className="fg-banner__avatar fg-banner__avatar--initials" aria-hidden="true">
            {initials}
          </span>
        )}
        <div className="fg-banner__info">
          <p className="fg-banner__title">{title}</p>
          <p className="fg-banner__name">{name}</p>
          <p className="fg-banner__role">{jobTitle}</p>
        </div>
      </div>
      {showAction && (
        <Button variant="secondary" size="small" onClick={onAction}>
          <span aria-hidden="true">📅</span>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
