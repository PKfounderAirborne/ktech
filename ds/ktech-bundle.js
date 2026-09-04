/* @ds-bundle: {"format":4,"namespace":"KtechDesignSystem_6974e7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AccreditationStrip","sourcePath":"components/marketing/AccreditationStrip.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bfacdbb3608c","components/core/Button.jsx":"37a5dd6c1439","components/core/Card.jsx":"0eb2ed59aee6","components/core/Icon.jsx":"c20ba5d11aac","components/core/IconButton.jsx":"ba1b950da5e1","components/core/Logo.jsx":"685f0c1eebba","components/core/Tag.jsx":"74e2281af4f1","components/feedback/Dialog.jsx":"6528432948b8","components/feedback/Toast.jsx":"9bc56b32bcd2","components/feedback/Tooltip.jsx":"dd8a550b304c","components/forms/Checkbox.jsx":"47f79e6c6eaf","components/forms/Input.jsx":"c02d5aa16117","components/forms/Radio.jsx":"322459314fb9","components/forms/Select.jsx":"c9275e10282a","components/forms/Switch.jsx":"cc7f3444c820","components/marketing/AccreditationStrip.jsx":"a9185112347d","components/marketing/SectionHeading.jsx":"bfef051cf3c2","components/marketing/ServiceCard.jsx":"48e4dbc89bae","components/marketing/StatBlock.jsx":"55e60728f16b","components/navigation/Tabs.jsx":"da449ee7b002","ui_kits/website/Chrome.jsx":"5c82a9172909","ui_kits/website/ContactScreen.jsx":"7fb18d865dfa","ui_kits/website/HomeScreen.jsx":"ed9b30ed8807","ui_kits/website/ServicesScreen.jsx":"e8ffd1cfdda3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KtechDesignSystem_6974e7 = window.KtechDesignSystem_6974e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  brand: {
    bg: "var(--blue-100)",
    fg: "var(--blue-700)",
    bd: "var(--blue-200)"
  },
  neutral: {
    bg: "var(--ink-100)",
    fg: "var(--ink-700)",
    bd: "var(--ink-200)"
  },
  secure: {
    bg: "var(--status-secure-bg)",
    fg: "var(--status-secure)",
    bd: "#bfe0cc"
  },
  caution: {
    bg: "var(--status-caution-bg)",
    fg: "#a86400",
    bd: "#f0d9ab"
  },
  alarm: {
    bg: "var(--status-alarm-bg)",
    fg: "var(--status-alarm)",
    bd: "#f3c3ca"
  },
  info: {
    bg: "var(--cyan-100)",
    fg: "var(--cyan-700)",
    bd: "var(--cyan-200)"
  },
  inverse: {
    bg: "rgba(255,255,255,.14)",
    fg: "var(--white)",
    bd: "var(--border-inverse)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  uppercase = true,
  className,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "3px var(--space-3)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-pill)",
      font: "var(--type-eyebrow)",
      letterSpacing: uppercase ? "0.1em" : "0.02em",
      textTransform: uppercase ? "uppercase" : "none",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "0 var(--space-4)",
    height: "36px",
    fontSize: "13px"
  },
  md: {
    padding: "0 var(--space-6)",
    height: "44px",
    fontSize: "15px"
  },
  lg: {
    padding: "0 var(--space-8)",
    height: "52px",
    fontSize: "16px"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--white)",
    border: "1px solid var(--action-primary)",
    hover: {
      background: "var(--action-primary-hover)",
      borderColor: "var(--action-primary-hover)"
    }
  },
  secondary: {
    background: "var(--action-secondary)",
    color: "var(--white)",
    border: "1px solid var(--action-secondary)",
    hover: {
      background: "var(--action-secondary-hover)",
      borderColor: "var(--action-secondary-hover)"
    }
  },
  outline: {
    background: "transparent",
    color: "var(--text-brand)",
    border: "1px solid var(--border-brand)",
    hover: {
      background: "var(--surface-tint)"
    }
  },
  ghost: {
    background: "transparent",
    color: "var(--text-heading)",
    border: "1px solid transparent",
    hover: {
      background: "var(--ink-100)"
    }
  },
  inverse: {
    background: "var(--white)",
    color: "var(--text-brand)",
    border: "1px solid var(--white)",
    hover: {
      background: "var(--blue-050)"
    }
  },
  "inverse-outline": {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--border-inverse)",
    hover: {
      background: "rgba(255,255,255,.12)",
      borderColor: "rgba(255,255,255,.5)"
    }
  },
  alarm: {
    background: "var(--status-alarm)",
    color: "var(--white)",
    border: "1px solid var(--status-alarm)",
    hover: {
      background: "#a80d26",
      borderColor: "#a80d26"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  href,
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    background: v.background,
    color: v.color,
    border: v.border,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "var(--transition-interactive), transform var(--duration-instant) var(--ease-standard)",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    ...(hover && !disabled ? v.hover : null),
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: className,
      style: base,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: className,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-shouldered surface. `accent` draws the cyan keyline on the left edge. */
function Card({
  children,
  tone = "light",
  accent = false,
  interactive = false,
  padding = "var(--space-6)",
  as = "div",
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-hairline)"
    },
    tint: {
      background: "var(--surface-tint)",
      color: "var(--text-body)",
      border: "1px solid var(--blue-100)"
    },
    brand: {
      background: "var(--surface-brand)",
      color: "var(--text-inverse)",
      border: "1px solid var(--blue-600)"
    },
    ink: {
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      border: "1px solid var(--ink-800)"
    }
  };
  const t = tones[tone] || tones.light;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: "relative",
      padding,
      borderRadius: "var(--radius-md)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      borderLeft: accent ? "var(--rule-width) solid var(--rule-accent)" : undefined,
      transition: "box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      ...t,
      ...(interactive && hover && tone === "light" ? {
        borderColor: "var(--border-strong)"
      } : null),
      ...(accent ? {
        borderLeft: "var(--rule-width) solid var(--rule-accent)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Lucide (pinned, static SVG via CSS mask) — see readme ICONOGRAPHY. */
const LUCIDE_BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";
function Icon({
  name,
  size = 20,
  color = "currentColor",
  title,
  className,
  style
}) {
  const url = `${LUCIDE_BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": title || name,
    className: className,
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  href,
  disabled = false,
  onClick,
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size] || SIZES.md;
  const glyph = px <= 32 ? 16 : px <= 40 ? 18 : 20;
  const palettes = {
    ghost: {
      bg: "transparent",
      fg: "var(--text-heading)",
      bd: "transparent",
      hoverBg: "var(--ink-100)"
    },
    outline: {
      bg: "var(--white)",
      fg: "var(--text-brand)",
      bd: "var(--border-hairline)",
      hoverBg: "var(--surface-tint)"
    },
    solid: {
      bg: "var(--action-primary)",
      fg: "var(--white)",
      bd: "var(--action-primary)",
      hoverBg: "var(--action-primary-hover)"
    },
    inverse: {
      bg: "rgba(255,255,255,.1)",
      fg: "var(--white)",
      bd: "var(--border-inverse)",
      hoverBg: "rgba(255,255,255,.2)"
    }
  };
  const p = palettes[variant] || palettes.ghost;
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: px,
    height: px,
    padding: 0,
    background: hover && !disabled ? p.hoverBg : p.bg,
    color: p.fg,
    border: `1px solid ${p.bd}`,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    transition: "var(--transition-interactive)",
    ...style
  };
  const body = typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph,
    title: label
  }) : icon;
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : "button",
    "aria-label": label,
    title: label,
    disabled: Tag === "button" ? disabled : undefined,
    className: className,
    style: styles,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), body);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/**
 * The supplied Ktech wordmark, used as an image — never re-drawn.
 * `basePath` points at the design-system root so the component works from any depth.
 */
function Logo({
  variant = "positive",
  height = 40,
  basePath = "",
  href,
  className,
  style
}) {
  const file = variant === "white" ? "assets/logo-ktech-white.svg" : "assets/logo-ktech.svg";
  const src = `${basePath ? basePath.replace(/\/$/, "") + "/" : ""}${file}`;
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Ktech Security & Property Services",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    },
    className: className
  });
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-block",
      border: 0
    }
  }, img) : img;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  icon,
  onRemove,
  active = false,
  className,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "6px var(--space-3)",
      background: active ? "var(--blue-600)" : hover ? "var(--surface-tint)" : "var(--white)",
      color: active ? "var(--white)" : "var(--text-body)",
      border: `1px solid ${active ? "var(--blue-600)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-sm)",
      font: "var(--type-body-sm)",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      transition: "var(--transition-interactive)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      background: "none",
      border: 0,
      padding: 0,
      marginLeft: 2,
      cursor: "pointer",
      color: "inherit",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520,
  className,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(12,12,86,.55)",
      backdropFilter: "var(--blur-glass)",
      padding: "var(--space-6)",
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: className,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      borderTop: "var(--rule-width) solid var(--rule-accent)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)"
    }
  }, title) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: "flex",
      background: "none",
      border: 0,
      padding: "var(--space-1)",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6) var(--space-6)",
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-6)",
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--ink-050)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    bar: "var(--cyan-500)",
    icon: "info"
  },
  secure: {
    bar: "var(--status-secure)",
    icon: "shield-check"
  },
  caution: {
    bar: "var(--status-caution)",
    icon: "triangle-alert"
  },
  alarm: {
    bar: "var(--status-alarm)",
    icon: "siren"
  }
};
function Toast({
  tone = "info",
  title,
  message,
  onDismiss,
  className,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: className,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 300,
      maxWidth: 420,
      padding: "var(--space-4)",
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      borderLeft: `var(--rule-width) solid ${t.bar}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.bar,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "#d7dae8"
    }
  }, message) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      display: "flex",
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      color: "#9aa0bd"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = "top",
  children,
  className,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      padding: "6px var(--space-3)",
      whiteSpace: "nowrap",
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      font: "var(--type-body-sm)",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      opacity: show ? 1 : 0,
      transition: "opacity var(--duration-fast) var(--ease-standard)",
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  name,
  value,
  onChange,
  className,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(e, !on);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      minHeight: "var(--hit-min)",
      padding: "var(--space-2) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 20,
      height: 20,
      marginTop: 1,
      display: "grid",
      placeItems: "center",
      background: on ? "var(--blue-600)" : "var(--white)",
      border: `1px solid ${on ? "var(--blue-600)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-xs)",
      transition: "var(--transition-interactive)"
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--white)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-heading)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: "100%",
  height: "44px",
  padding: "0 var(--space-3)",
  font: "var(--type-body)",
  color: "var(--text-heading)",
  background: "var(--white)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-sm)",
  outline: "none",
  transition: "var(--transition-interactive)"
};
function Input({
  label,
  id,
  name,
  type = "text",
  value,
  defaultValue,
  placeholder,
  hint,
  error,
  required = false,
  disabled = false,
  iconLeft,
  multiline = false,
  rows = 4,
  onChange,
  className,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || name || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const control = {
    ...fieldBase,
    ...(multiline ? {
      height: "auto",
      padding: "var(--space-3)",
      lineHeight: 1.5,
      resize: "vertical"
    } : null),
    ...(iconLeft ? {
      paddingLeft: "38px"
    } : null),
    ...(error ? {
      borderColor: "var(--status-alarm)"
    } : null),
    ...(focus ? {
      borderColor: "var(--blue-600)",
      boxShadow: "var(--focus-ring)"
    } : null),
    ...(disabled ? {
      background: "var(--ink-050)",
      color: "var(--text-muted)",
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const shared = {
    id: fieldId,
    name,
    value,
    defaultValue,
    placeholder,
    required,
    disabled,
    onChange,
    style: control,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-alarm)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, iconLeft) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--status-alarm)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  className,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      minHeight: "var(--hit-min)",
      padding: "var(--space-2) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(true);
      onChange && onChange(e, value);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 20,
      height: 20,
      marginTop: 1,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "var(--white)",
      border: `1px solid ${on ? "var(--blue-600)" : "var(--border-strong)"}`,
      transition: "var(--transition-interactive)"
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--blue-600)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-heading)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  id,
  name,
  value,
  defaultValue,
  options = [],
  placeholder,
  hint,
  error,
  required = false,
  disabled = false,
  onChange,
  className,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || name || (label ? `s-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const arrow = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%235f5f59' stroke-width='1.6' stroke-linecap='square'/></svg>\")";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-alarm)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("select", {
    id: fieldId,
    name: name,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: "44px",
      padding: "0 36px 0 var(--space-3)",
      font: "var(--type-body)",
      color: value || defaultValue ? "var(--text-heading)" : "var(--text-muted)",
      background: `var(--white) ${arrow} no-repeat right var(--space-3) center`,
      border: `1px solid ${error ? "var(--status-alarm)" : focus ? "var(--blue-600)" : "var(--border-strong)"}`,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      borderRadius: "var(--radius-sm)",
      appearance: "none",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-interactive)",
      ...style
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--status-alarm)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  className,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      minHeight: "var(--hit-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: "relative",
      width: 44,
      height: 24,
      padding: 0,
      flex: "0 0 auto",
      background: on ? "var(--blue-600)" : "var(--ink-300)",
      border: "1px solid " + (on ? "var(--blue-600)" : "var(--ink-300)"),
      borderRadius: "var(--radius-pill)",
      cursor: "inherit",
      transition: "var(--transition-interactive)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      background: "var(--white)",
      borderRadius: "50%",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--duration-fast) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-heading)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AccreditationStrip.jsx
try { (() => {
const MARKS = [{
  file: "assets/accreditation-psa.jpg",
  alt: "Licensed by The Private Security Authority — PSA Licence 00041",
  h: 52
}, {
  file: "assets/accreditation-amtivo.jpg",
  alt: "Amtivo certified",
  h: 46
}, {
  file: "assets/accreditation-cif.jpg",
  alt: "Construction Industry Federation member",
  h: 46
}, {
  file: "assets/accreditation-asis.jpg",
  alt: "ASIS International member",
  h: 40
}];

/** Row of supplied accreditation marks. Always sits on white — the source files are CMYK JPEGs with white grounds. */
function AccreditationStrip({
  basePath = "",
  height,
  gap = "var(--space-10)",
  align = "center",
  className,
  style
}) {
  const prefix = basePath ? basePath.replace(/\/$/, "") + "/" : "";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: align,
      gap,
      ...style
    }
  }, MARKS.map(m => /*#__PURE__*/React.createElement("img", {
    key: m.file,
    src: prefix + m.file,
    alt: m.alt,
    style: {
      height: height || m.h,
      width: "auto",
      mixBlendMode: "multiply"
    }
  })));
}
Object.assign(__ds_scope, { AccreditationStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AccreditationStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/** Eyebrow + cyan keyline + heading + optional lede. The brand's standard section opener. */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
  style
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: align === "center" ? "760px" : "680px",
      margin: align === "center" ? "0 auto" : undefined,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: "var(--rule-width)",
      background: "var(--rule-accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: inverse ? "var(--cyan-400)" : "var(--text-brand)"
    }
  }, eyebrow)) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: inverse ? "var(--text-inverse)" : "var(--text-heading)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, title) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-body)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/** Division / service tile: icon, name, one-line description, optional bullet list. */
function ServiceCard({
  icon,
  title,
  description,
  bullets = [],
  href = "#",
  tone = "light",
  className,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      textDecoration: "none",
      border: 0,
      background: inverse ? "rgba(255,255,255,.06)" : "var(--surface-card)",
      boxShadow: inverse ? "none" : hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      outline: `1px solid ${inverse ? "var(--border-inverse)" : hover ? "var(--border-strong)" : "var(--border-hairline)"}`,
      outlineOffset: "-1px",
      borderTop: `var(--rule-width) solid ${hover ? "var(--rule-accent)" : inverse ? "rgba(255,255,255,.25)" : "var(--blue-600)"}`,
      borderRadius: "var(--radius-md)",
      transition: "var(--transition-interactive), box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: inverse ? "var(--cyan-400)" : "var(--blue-600)"
  }) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: inverse ? "var(--text-inverse)" : "var(--text-heading)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-body)"
    }
  }, description) : null, bullets.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: "var(--space-2)",
      font: "var(--type-body-sm)",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: inverse ? "var(--cyan-400)" : "var(--blue-600)",
    style: {
      marginTop: 3
    }
  }), b))) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--type-label)",
      color: inverse ? "var(--white)" : "var(--text-brand)"
    }
  }, "Learn more", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--duration-fast) var(--ease-standard)"
    }
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
/** Big number + label, separated by hairlines. Used for the "40 years / 24/7 / 6 divisions" strip. */
function StatBlock({
  value,
  label,
  tone = "light",
  className,
  style
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-display-2)",
      letterSpacing: "var(--tracking-display)",
      color: inverse ? "var(--white)" : "var(--text-brand)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underlined tab bar — the active tab carries the cyan keyline. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = "light",
  className,
  style
}) {
  const first = items[0] && (typeof items[0] === "string" ? items[0] : items[0].value);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = isControlled ? value : internal;
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: className,
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-hairline)"}`,
      ...style
    }
  }, items.map(raw => {
    const it = typeof raw === "string" ? {
      value: raw,
      label: raw
    } : raw;
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (!isControlled) setInternal(it.value);
        onChange && onChange(it.value);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "var(--space-3) 0",
        background: "none",
        border: 0,
        borderBottom: `var(--rule-width) solid ${on ? "var(--rule-accent)" : "transparent"}`,
        marginBottom: "-1px",
        cursor: "pointer",
        font: "var(--type-label)",
        fontSize: "15px",
        color: on ? inverse ? "var(--white)" : "var(--text-heading)" : inverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
        transition: "var(--transition-interactive)"
      }
    }, it.label, it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon,
  IconButton
} = window.KtechDesignSystem_6974e7;
const BASE = "../..";
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "security",
  label: "Security Services"
}, {
  id: "property",
  label: "Property Services"
}, {
  id: "reconeyez",
  label: "Reconeyez"
}, {
  id: "contact",
  label: "Contact Us"
}];
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-brand-deep)",
      color: "var(--text-inverse-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--cyan-400)"
  }), "7 First Avenue, Cookstown Industrial Estate, Tallaght, Dublin 24"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14,
    color: "var(--cyan-400)"
  }), "admin@ktech.ie")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--white)",
      fontFamily: "var(--font-display)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14,
    color: "var(--cyan-400)"
  }), "Nationwide \xB7 24/7")));
}
function Header({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--surface-page)",
      boxShadow: "var(--shadow-header)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 84,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      border: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 42,
    basePath: BASE
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, NAV.map(n => {
    const on = route === n.id;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(n.id);
      },
      style: {
        border: 0,
        borderBottom: `var(--rule-width) solid ${on ? "var(--rule-accent)" : "transparent"}`,
        padding: "6px 0",
        font: "var(--type-label)",
        fontSize: 15,
        color: on ? "var(--text-heading)" : "var(--text-body)"
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone-call",
      size: 16
    }),
    href: "#"
  }, "01 437 0570"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search",
    variant: "outline"
  }))));
}
function Footer({
  onNavigate
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--cyan-400)"
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      border: 0,
      font: "var(--type-body-sm)",
      color: "#c9cbd6"
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 40,
    basePath: BASE
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "#b6b8c2",
      maxWidth: 300
    }
  }, "Established nearly 40 years ago in Dublin. One of the first companies licensed by the Private Security Authority."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontFamily: "var(--font-mono)",
      color: "var(--cyan-400)"
    }
  }, "PSA Licence 00041")), col("Security", ["Uniformed Security Services", "Electronic Security Systems", "Construction Security", "Reconeyez", "Locksmith Solutions"]), col("Property", ["Property Maintenance", "Vacant Property Inspections", "Keyholding", "Power Washing", "Waste Clearance"]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--cyan-400)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "#c9cbd6"
    }
  }, "7 First Avenue,", /*#__PURE__*/React.createElement("br", null), "Cookstown Industrial Estate,", /*#__PURE__*/React.createElement("br", null), "Tallaght, Dublin 24, D24 F20X"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "#c9cbd6"
    }
  }, "+353 (0)1 437 0570"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("contact");
    },
    style: {
      border: 0,
      font: "var(--type-label)",
      color: "var(--white)",
      display: "inline-flex",
      gap: 6,
      alignItems: "center"
    }
  }, "Request a survey ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--space-6)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      color: "#8f919c"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " K-Tech Security UC. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      border: 0,
      color: "#8f919c"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      border: 0,
      color: "#8f919c"
    }
  }, "Terms")))));
}
function Section({
  children,
  tone = "light",
  tight = false,
  style
}) {
  const bg = {
    light: "var(--surface-page)",
    subtle: "var(--surface-subtle)",
    brand: "var(--surface-brand)",
    ink: "var(--surface-ink)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${tight ? "var(--section-y-tight)" : "var(--section-y)"} var(--space-6)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  NAV,
  BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Input,
  Select,
  Checkbox,
  Radio,
  Dialog,
  Toast,
  SectionHeading,
  AccreditationStrip
} = window.KtechDesignSystem_6974e7;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ScreenHero, {
    eyebrow: "Contact us",
    title: "Tell us about the site. We'll come and look at it.",
    lede: "Call the office on +353 (0)1 437 0570, or send the details below and a specialist will come back to you.",
    image: "assets/img-fleet-02.jpg"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr .8fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Enquiry",
    title: "Request a survey or quote"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "\"(Required)\" indicates required fields"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    name: "name",
    required: true,
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    name: "company",
    placeholder: "Company or agent"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "you@company.ie"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    name: "phone",
    required: true,
    placeholder: "087 000 0000",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service required",
    required: true,
    placeholder: "Choose a division",
    options: ["Uniformed Security Services", "Electronic Security Systems", "Reconeyez", "Construction Security", "Locksmith Solutions", "Property Maintenance"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Site Eircode",
    name: "eircode",
    placeholder: "D24 F20X"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "What do you need?",
    name: "detail",
    multiline: true,
    rows: 5,
    placeholder: "Site type, size, current arrangements, timescale."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      display: "block",
      marginBottom: "var(--space-2)"
    }
  }, "How soon do you need cover?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "when",
    value: "now",
    label: "Tonight",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "when",
    value: "week",
    label: "This week"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "when",
    value: "plan",
    label: "Planning ahead"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep me posted on Ktech news and Reconeyez updates"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Send enquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone-call",
      size: 18
    }),
    onClick: () => setToast(true)
  }, "Or call 01 437 0570"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, "Head office"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      font: "var(--type-body)"
    }
  }, "KTech Security", /*#__PURE__*/React.createElement("br", null), "7 First Avenue, Cookstown Industrial Estate", /*#__PURE__*/React.createElement("br", null), "Tallaght, Dublin 24", /*#__PURE__*/React.createElement("br", null), "Eircode D24 F20X"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--blue-600)"
  }), "+353 (0)1 437 0570"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    color: "var(--blue-600)"
  }), "admin@ktech.ie"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15,
    color: "var(--blue-600)"
  }), "Control room staffed 24/7"))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, "Trade enquiries"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      font: "var(--type-body)"
    }
  }, "Installers and facilities contractors: we supply and install Reconeyez nationwide. Ask for the trade desk.")), /*#__PURE__*/React.createElement(AccreditationStrip, {
    basePath: BASE,
    align: "flex-start",
    gap: "var(--space-6)",
    height: 40
  })))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "info",
    title: "Control room",
    message: "+353 (0)1 437 0570 \u2014 answered 24 hours a day.",
    onDismiss: () => setToast(false)
  })) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    eyebrow: "Enquiry received",
    title: "Thanks \u2014 we have your details",
    onClose: () => setSent(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Close")
  }, /*#__PURE__*/React.createElement("p", null, "A specialist will call you back to arrange a site survey. If it's urgent, ring the control room on +353 (0)1 437 0570.")));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Badge,
  Card,
  ServiceCard,
  SectionHeading,
  StatBlock,
  AccreditationStrip
} = window.KtechDesignSystem_6974e7;
const DIVISIONS = [{
  icon: "shield-check",
  title: "Uniformed Security Services",
  description: "Trained, licensed personnel for static guarding, mobile patrols, vacant property inspections, keyholding and alarm response.",
  bullets: ["Static guarding", "Mobile patrol fleet", "Keyholding & alarm response"]
}, {
  icon: "cctv",
  title: "Electronic Security Systems",
  description: "Design, installation and maintenance of CCTV, intruder alarms and access control by our own specialist engineers.",
  bullets: ["CCTV", "Intruder alarms", "Access control"]
}, {
  icon: "satellite-dish",
  title: "Reconeyez Distribution",
  description: "Ireland's distributor and installer of Reconeyez — solar and battery powered remote CCTV, managed from your phone.",
  bullets: ["Solar powered", "No mains or cabling", "Mobile app"]
}, {
  icon: "hard-hat",
  title: "Construction Security",
  description: "Packages built around the site programme to stop theft, vandalism and unauthorised access from first fix to handover.",
  bullets: ["Site guarding", "Remote surveillance", "Plant protection"]
}, {
  icon: "key-round",
  title: "Locksmith Solutions",
  description: "Commercial locksmithing: lockout response, lock changes between tenants, master key suites and break-in repairs.",
  bullets: ["Lockout response", "Master key systems", "Break-in repairs"]
}, {
  icon: "wrench",
  title: "Property Maintenance",
  description: "Certified, insured tradespeople — electricians, plumbers, carpenters, roofers, painters and landscapers.",
  bullets: ["General & reactive works", "Landscaping & clearance", "Power washing"]
}];
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${BASE}/assets/img-cctv-patrol.jpg`,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-brand)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse",
    dot: true,
    style: {
      alignSelf: "flex-start"
    }
  }, "Nationwide \xB7 24/7"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-1)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)"
    }
  }, "Security and property services, done properly."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "#d7dbee",
      maxWidth: 560
    }
  }, "Established nearly 40 years ago in Dublin, Ktech was one of the first companies licensed by the Private Security Authority. Six divisions, one point of contact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate("contact")
  }, "Request a survey"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone-call",
      size: 18
    })
  }, "01 437 0570")))));
}
function StatStrip() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-8)"
    }
  }, [["40", "Years in operation"], ["24/7", "Nationwide cover"], ["6", "Specialist divisions"], ["00041", "PSA licence"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      paddingLeft: i ? "var(--space-8)" : 0,
      borderLeft: i ? "1px solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: v,
    label: l
  })))));
}
function Divisions({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our services",
    title: "Six divisions, one point of contact",
    lede: "There are six divisions within our company, each with their own specialisms, staff, services and equipment."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-12)"
    }
  }, DIVISIONS.map(d => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: d.title
  }, d, {
    href: "#"
  })))));
}
function ReconeyezBand({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Reconeyez",
    title: "Remote CCTV with no mains, no cabling, no trenching.",
    lede: "At Ktech Security we are Ireland's distributor and installer of Reconeyez: solar and battery powered detectors and cameras, monitored and managed from a mobile app."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => onNavigate("reconeyez")
  }, "See how it works"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    onClick: () => onNavigate("contact")
  }, "Talk to an engineer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      borderTop: "var(--rule-width) solid var(--rule-accent)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${BASE}/assets/img-fleet-02.jpg`,
    alt: "Ktech fleet at the Tallaght depot",
    style: {
      width: "100%",
      height: 320,
      objectFit: "cover"
    }
  }))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderLeft: "var(--rule-width) solid var(--rule-accent)",
      paddingLeft: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h3)",
      fontWeight: 500,
      color: "var(--text-heading)"
    }
  }, "\u201CWhen we bought our premises we needed the property secured from the time we got the keys to once we started trading. I found Ktech invaluable in terms of preparing us along the way to have the property secured, from our reconstruction phase to opening the place up for trading and since, with the installation of our cameras and alarm. No hesitation in recommending Ktech.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-4)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Mr. A. H. \u2014 Owner of a fast growing logistics and storage business, Dublin")), /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, "Quality system"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      font: "var(--type-body)"
    }
  }, "We take quality very seriously and have a robust Quality System in place to ensure that we remain compliant with industry legislation in all areas."))));
}
function Accreditations() {
  return /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: "var(--space-12)",
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, "Licensed, certified, accredited"), /*#__PURE__*/React.createElement(AccreditationStrip, {
    basePath: BASE
  })));
}
function CallToAction({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand-deep)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      color: "var(--white)"
    }
  }, "Need cover tonight?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-inverse-muted)",
      marginTop: "var(--space-3)"
    }
  }, "Our control room is staffed 24 hours a day, every day of the year.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone-call",
      size: 18
    })
  }, "01 437 0570"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-outline",
    size: "lg",
    onClick: () => onNavigate("contact")
  }, "Send an enquiry"))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(StatStrip, null), /*#__PURE__*/React.createElement(Divisions, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(ReconeyezBand, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Accreditations, null), /*#__PURE__*/React.createElement(CallToAction, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  HomeScreen,
  DIVISIONS,
  CallToAction,
  Accreditations
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Badge,
  Card,
  Tabs,
  Tag,
  Switch,
  ServiceCard,
  SectionHeading
} = window.KtechDesignSystem_6974e7;
const SECURITY = [{
  icon: "shield-check",
  title: "Static Guarding",
  description: "Uniformed, PSA-licensed officers on site, with documented patrol reporting."
}, {
  icon: "car",
  title: "Mobile Patrols",
  description: "Marked patrol vehicles on scheduled and random visits, nationwide."
}, {
  icon: "siren",
  title: "Alarm Response",
  description: "Keyholding and emergency response to intruder, fire and panic activations."
}, {
  icon: "cctv",
  title: "CCTV Systems",
  description: "Design, installation and maintenance of camera systems by our own engineers."
}, {
  icon: "fingerprint",
  title: "Access Control",
  description: "Door entry, fobs, readers and permission management for multi-tenant buildings."
}, {
  icon: "key-round",
  title: "Locksmith Solutions",
  description: "Lockouts, lock changes, master key suites and post break-in repairs."
}];
const PROPERTY = [{
  icon: "clipboard-check",
  title: "Vacant Property Inspections",
  description: "Weekly, fortnightly or monthly inspections with photographic reporting."
}, {
  icon: "wrench",
  title: "Reactive Maintenance",
  description: "Certified electricians, plumbers, carpenters, roofers and painters."
}, {
  icon: "droplets",
  title: "Power Washing",
  description: "Annual exterior cleaning that removes moss, algae, trip and skid hazards."
}, {
  icon: "trees",
  title: "Landscaping & Clearance",
  description: "Overgrown grounds cut back, junk and clutter removed under licence."
}, {
  icon: "key-round",
  title: "Keyholding",
  description: "Secure key storage with logged issue and return, and 24/7 attendance."
}, {
  icon: "file-check",
  title: "Pre-Letting Assessments",
  description: "Security, plumbing, heating, electrical and fire compliance checks before listing."
}];
function ScreenHero({
  eyebrow,
  title,
  lede,
  image
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${BASE}/${image}`,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-brand)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: eyebrow,
    title: title,
    lede: lede
  })));
}
function ServicesScreen({
  onNavigate,
  initialTab = "security"
}) {
  const [tab, setTab] = React.useState(initialTab);
  const list = tab === "security" ? SECURITY : PROPERTY;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHero, {
    eyebrow: "Our solutions",
    title: "Security and property services for every market sector",
    lede: "We offer a comprehensive service to determine the best solution for your requirements. We take care of the design, installation and maintenance of our security services.",
    image: "assets/img-fleet-03.jpg"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "security",
      label: "Security Services"
    }, {
      value: "property",
      label: "Property Services"
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, (tab === "security" ? ["Guarding", "Patrols", "CCTV", "Alarms", "Access control", "Locksmiths"] : ["Inspections", "Maintenance", "Cleaning", "Grounds", "Keyholding"]).map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: i === 0
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, list.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ktech-eyebrow"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", null, "Survey, design, install, maintain."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)"
    }
  }, "No job is too small or big for us to quote for. We use Work Pal field management software for our operational and property maintenance personnel, so every visit is logged and reportable."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("contact")
  }, "Request a survey"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, [["1", "Site survey", "A specialist walks the site and agrees the scope with you."], ["2", "Written proposal", "Fixed costs, response times and equipment specified in writing."], ["3", "Installation & handover", "Our own engineers install, commission and train your team."], ["4", "Maintenance & monitoring", "Planned servicing, 24/7 response, documented reporting."]].map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--blue-300)",
      minWidth: 24
    }
  }, n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-h4)",
      display: "block",
      color: "var(--text-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, d))))))), /*#__PURE__*/React.createElement(CallToAction, {
    onNavigate: onNavigate
  }));
}
function ReconeyezScreen({
  onNavigate
}) {
  const [alerts, setAlerts] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHero, {
    eyebrow: "Reconeyez",
    title: "Solar powered remote CCTV, monitored from your phone",
    lede: "At Ktech Security, Ireland's distributor and installer of Reconeyez security cameras, we understand that sites change week to week. The system moves with them.",
    image: "assets/img-cctv-patrol.jpg"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why it suits Irish sites",
    title: "No mains. No cabling. No trenching.",
    lede: "Detectors and cameras run on solar panels and long-life batteries, communicate over their own mesh, and are redeployed as the site programme moves."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, [["sun", "Solar + battery", "Weeks of autonomy through Irish winters."], ["radio", "Own mesh network", "No site Wi-Fi or power required."], ["smartphone", "Manage in the app", "Arm, disarm and review alerts anywhere, anytime."], ["move", "Redeployable", "Moves as the works move, no re-installation cost."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--blue-600)"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      font: "var(--type-h4)",
      marginTop: "var(--space-3)",
      color: "var(--text-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, d))))), /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      borderBottom: "1px solid rgba(255,255,255,.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--white)"
    }
  }, "Site: Naas Road \u2014 Unit 4"), /*#__PURE__*/React.createElement(Badge, {
    tone: "secure",
    dot: true
  }, "Armed")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${BASE}/assets/img-fleet-01.jpg`,
    alt: "Camera view",
    style: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      filter: "saturate(.7)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      font: "var(--type-caption)",
      fontFamily: "var(--font-mono)",
      color: "#fff",
      background: "rgba(12,12,86,.7)",
      padding: "3px 8px"
    }
  }, "CAM 02 \xB7 23:41:07")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["Battery", "86%"], ["Signal", "Strong"], ["Last event", "Detector 3 · 22:16"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      color: "#c9cbd6"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--white)"
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.14)",
      paddingTop: "var(--space-3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "#c9cbd6"
    }
  }, "Push alerts"), /*#__PURE__*/React.createElement(Switch, {
    checked: alerts,
    onChange: setAlerts
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onNavigate("contact")
  }, "Book a site survey"))))), /*#__PURE__*/React.createElement(CallToAction, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  ServicesScreen,
  ReconeyezScreen,
  ScreenHero,
  SECURITY,
  PROPERTY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AccreditationStrip = __ds_scope.AccreditationStrip;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
