import { describe, expect, it } from 'vitest'
import {
  DEFAULT_PREVIEW_THEME,
  previewThemeOf,
} from '../src/client/markdown-preview-theme.ts'

describe('previewThemeOf', () => {
  it('defaults to vivid', () => {
    expect(DEFAULT_PREVIEW_THEME).toBe('vivid')
    expect(previewThemeOf(undefined)).toBe('vivid')
    expect(previewThemeOf(null)).toBe('vivid')
    expect(previewThemeOf('')).toBe('vivid')
  })

  it('accepts known theme ids', () => {
    expect(previewThemeOf('vivid')).toBe('vivid')
    expect(previewThemeOf('host')).toBe('host')
  })

  it('falls back on unknown or non-string values', () => {
    expect(previewThemeOf('github')).toBe('vivid')
    expect(previewThemeOf(1)).toBe('vivid')
    expect(previewThemeOf({ theme: 'host' })).toBe('vivid')
  })
})
