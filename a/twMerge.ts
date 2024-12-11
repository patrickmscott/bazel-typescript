import { extendTailwindMerge, getDefaultConfig } from 'tailwind-merge';
import { theme as fractusTheme } from './fractusPlugin';
import {
  KeyValuePair,
  RecursiveKeyValuePair,
  ResolvableTo,
} from 'tailwindcss/types/config';
import { type Config } from 'tailwindcss';

export const theme: NonNullable<Config['theme']> = {
  ...fractusTheme,
  extend: {
    ...fractusTheme?.extend,
  },
};

type twScale =
  | ResolvableTo<RecursiveKeyValuePair<string, string>>
  | ResolvableTo<KeyValuePair<string, string>>
  | undefined;

/**
 * This helper function takes a (possibly recursive) scale from tailwind config
 * and transforms it into the flat array expected by the config object of tailwind-merge.
 * It also transforms the 'DEFAULT' entries to empty strings.
 *
 * Ex.
 *  { neutral: { DEFAULT: '...', muted: '...', strong: '' }} becomes:
 *  [ 'neutral', 'neutral-muted', 'neutral-strong' ]
 */
export const reduceScales = (twScale: twScale): string[] => {
  if (!twScale) return [];

  return (
    Object.keys(twScale)
      .reduce((acc, key) => {
        const val = twScale[key as keyof twScale];

        if (typeof val === 'string') {
          return [...acc, key];
        }

        return [...acc, ...reduceScales(val).map((step) => `${key}-${step}`)];
      }, [] as string[])
      // Remove any occurrences of DEFAULT
      .map((key) => key.replace('-DEFAULT', ''))
  );
};

export const keys = (scale: twScale) => {
  return [...Object.keys({ ...scale })];
};

// Some scales (like border-width) interpret '' as default instead of DEFAULT
const emptyStringDefault = (arr: string[]) =>
  arr.map((v) => (v === 'DEFAULT' ? '' : v));

// These are the scales for each class group that tailwind-merge expects in its config object.
// Note that it's quite different from the scale objects you feed to tailwind itself
const configScales = {
  basis: keys(theme.flexBasis),
  bgColor: reduceScales(theme.extend?.backgroundColor),
  borderColor: reduceScales(theme.extend?.borderColor),
  borderRadius: emptyStringDefault(reduceScales(theme.borderRadius)),
  borderWidth: emptyStringDefault(reduceScales(theme.borderWidth)),
  colors: reduceScales(theme.colors),
  fontSize: keys(theme.fontSize as twScale),
  fontWeight: keys(theme.fontWeight),
  height: keys(theme.height),
  inset: keys(theme.inset),
  lineHeight: keys(theme.lineHeight),
  margin: keys(theme.margin),
  minHeight: keys(theme.minHeight),
  minWidth: keys(theme.minWidth),
  maxHeight: keys(theme.maxHeight),
  maxWidth: keys(theme.maxWidth),
  outlineColor: reduceScales(theme.extend?.outlineColor),
  outlineWidth: keys(theme.outlineWidth),
  ring: keys(theme.ringWidth),
  size: keys(theme.size),
  textColor: reduceScales(theme.extend?.textColor),
  width: keys(theme.width),
};

/**
 * This config can be somewhat tricky to wrap your head around. This object MUST be updated anytime
 * we add a new override to the default tailwind config.
 *
 * Here's the relevant documentation on this config object:
 *
 * Docs:
 * - https://github.com/dcastil/tailwind-merge/blob/main/docs/configuration.md
 * - https://github.com/dcastil/tailwind-merge/blob/main/docs/api-reference.md
 *
 * It can also be helpful to console log the `getDefaultConfig` function from `tailwind-merge`
 * and inspect the result in order to understand the expected format.
 *
 */
export const twMergeConfig = {
  override: {
    theme: {
      colors: configScales.colors,

      // Properties that have additional values not derived from base scales need explicit config
      margin: configScales.margin,
    },
  },
  extend: {
    classGroups: {
      basis: [{ basis: configScales.basis }],
      'bg-color': [{ bg: configScales.bgColor }],
      'border-color': [{ border: configScales.borderColor }],
      'border-color-t': [{ 'border-t': configScales.borderColor }],
      'border-color-b': [{ 'border-b': configScales.borderColor }],
      'border-color-l': [{ 'border-l': configScales.borderColor }],
      'border-color-r': [{ 'border-r': configScales.borderColor }],
      'border-color-x': [{ 'border-x': configScales.borderColor }],
      'border-color-y': [{ 'border-y': configScales.borderColor }],
      'border-width': [{ border: configScales.borderWidth }],
      'font-size': [{ text: configScales.fontSize }],
      'font-weight': [{ font: configScales.fontWeight }],
      h: [{ h: configScales.height }],
      inset: [{ inset: configScales.inset }],
      'line-height': [{ leading: configScales.lineHeight }],
      'min-h': [{ 'min-h': configScales.minHeight }],
      'min-w': [{ 'min-w': configScales.minWidth }],
      'max-h': [{ 'max-h': configScales.maxHeight }],
      'max-w': [{ 'max-w': configScales.maxWidth }],
      'outline-color': [{ outline: configScales.outlineColor }],
      'outline-w': [{ outline: configScales.outlineWidth }],
      ring: [{ ring: configScales.ring }],
      rounded: [{ rounded: configScales.borderRadius }],
      'rounded-t': [{ 'rounded-t': configScales.borderRadius }],
      'rounded-r': [{ 'rounded-r': configScales.borderRadius }],
      'rounded-b': [{ 'rounded-b': configScales.borderRadius }],
      'rounded-l': [{ 'rounded-l': configScales.borderRadius }],
      size: [{ size: configScales.size }],
      'text-color': [{ text: configScales.textColor }],
      w: [{ w: configScales.width }],
    },
  },
};

export const twMerge = extendTailwindMerge(twMergeConfig);
