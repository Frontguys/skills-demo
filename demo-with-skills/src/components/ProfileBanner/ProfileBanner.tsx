import type { HTMLAttributes, ReactNode } from "react";
import { atom } from "../../atom";
import { Calendar } from "../icons/icons";
import styles from "./ProfileBanner.module.css";

interface ProfileBannerProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
	/** Small lead-in line above the name. */
	title: ReactNode;
	/** Person's name. */
	name: ReactNode;
	/** Person's role / company. */
	jobTitle: ReactNode;
	/** Avatar image URL. Falls back to initials from `name` when omitted. */
	avatarSrc?: string;
	/** Accessible alt text for the avatar. Empty string marks it decorative. */
	avatarAlt?: string;
	/** Optional call-to-action rendered on the right. */
	action?: ReactNode;
}

const initials = (value: ReactNode) =>
	typeof value === "string"
		? value
				.split(" ")
				.map((word) => word[0])
				.slice(0, 2)
				.join("")
				.toUpperCase()
		: null;

/**
 * ProfileBanner — highlights a person to contact with an optional CTA.
 */
export const ProfileBanner = ({
	title,
	name,
	jobTitle,
	avatarSrc,
	avatarAlt = "",
	action,
	...props
}: ProfileBannerProps) => (
	<ProfileBanner.Root {...props}>
		{avatarSrc ? (
			<img className={styles.avatar} src={avatarSrc} alt={avatarAlt} />
		) : (
			<span className={styles.avatar} aria-hidden="true">
				{initials(name)}
			</span>
		)}
		<ProfileBanner.Body>
			<ProfileBanner.Title>{title}</ProfileBanner.Title>
			<ProfileBanner.Name>{name}</ProfileBanner.Name>
			<ProfileBanner.JobTitle>{jobTitle}</ProfileBanner.JobTitle>
		</ProfileBanner.Body>
		{action && <div className={styles.action}>{action}</div>}
	</ProfileBanner.Root>
);

/**
 * Root of ProfileBanner.
 */
ProfileBanner.Root = atom("div", styles.root);

/**
 * Text column.
 */
ProfileBanner.Body = atom("div", styles.body);

/**
 * Lead-in title.
 */
ProfileBanner.Title = atom("p", styles.title);

/**
 * Person name.
 */
ProfileBanner.Name = atom("p", styles.name);

/**
 * Person role.
 */
ProfileBanner.JobTitle = atom("p", styles.jobTitle);

export { Calendar as ProfileBannerActionIcon };
