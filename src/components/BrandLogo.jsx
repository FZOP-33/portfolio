import { profileData } from '../data/profile';

/**
 * BrandLogo Component
 *
 * Personal visual identity built around Mohamed Diarra's "MD" monogram:
 * - Custom geometric "MD" rounded-square symbol in Violet & Cyan-Blue
 * - Minimalist, modern wordmark ("Mohamed" or "Mohamed Diarra") right next to the emblem
 */
export function BrandLogo({ showFullName = false, size = 38, className = '' }) {
  const { brand } = profileData;
  const labelText = showFullName ? brand.fullWordmark : brand.wordmark;

  return (
    <span className={`brand-identity ${className}`.trim()}>
      <span className="brand-mark-wrap" aria-hidden="true">
        <img
          src={brand.monogramSrc}
          alt=""
          width={size}
          height={size}
          className="brand-mark-svg"
        />
      </span>
      <span className="brand-wordmark-group">
        <span className="brand-text">
          {labelText}
          <span className="brand-dot" aria-hidden="true"></span>
        </span>
      </span>
    </span>
  );
}

