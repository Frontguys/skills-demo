import { Button } from './Button';
import { CalendarIcon } from './Icons';
import styles from './Banner.module.css';

export interface BannerProps {
  avatarSrc: string;
  avatarAlt: string;
  title: string;
  name: string;
  jobTitle: string;
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

export function Banner({
  avatarSrc,
  avatarAlt,
  title,
  name,
  jobTitle,
  showAction = false,
  actionLabel = 'Planifiez un échange',
  onAction,
}: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={avatarSrc} alt={avatarAlt} />
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.jobTitle}>{jobTitle}</p>
        </div>
      </div>
      {showAction && (
        <Button variant="secondary" onClick={onAction}>
          <CalendarIcon />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
