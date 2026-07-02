import { atom } from "../../atom";
import { Button } from "./Button";
import { CalendarIcon } from "./Icons";
import styles from "./Banner.module.css";

export interface BannerProps {
  avatarSrc: string;
  avatarAlt: string;
  title: string;
  name: string;
  jobTitle: string;
  /** Shows the call-to-action button on the right, e.g. to book a meeting. */
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Profile card introducing a contact, with an optional call-to-action.
 */
export const Banner = ({
  avatarSrc,
  avatarAlt,
  title,
  name,
  jobTitle,
  showAction = false,
  actionLabel = "Planifiez un échange",
  onAction,
}: BannerProps) => (
  <Banner.Root>
    <Banner.Profile>
      <Banner.Avatar src={avatarSrc} alt={avatarAlt} />
      <div>
        <Banner.Title>{title}</Banner.Title>
        <Banner.Name>{name}</Banner.Name>
        <Banner.JobTitle>{jobTitle}</Banner.JobTitle>
      </div>
    </Banner.Profile>
    {showAction && (
      <Button variant="secondary" onClick={onAction}>
        <CalendarIcon />
        {actionLabel}
      </Button>
    )}
  </Banner.Root>
);

/** Root card wrapping the profile and its call-to-action. */
Banner.Root = atom("div", styles.root);
/** Groups the avatar with the name/title block. */
Banner.Profile = atom("div", styles.profile);
/** Circular profile photo. */
Banner.Avatar = atom("img", styles.avatar);
/** Small eyebrow line above the contact's name. */
Banner.Title = atom("p", styles.title);
/** Contact's name. */
Banner.Name = atom("p", styles.name);
/** Contact's job title. */
Banner.JobTitle = atom("p", styles.jobTitle);
