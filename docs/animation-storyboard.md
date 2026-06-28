# Animation Storyboard

## Global Motion Principles

- The site should feel like an interface being inspected and reshaped.
- Motion should be precise, mechanical, and tactile.
- Avoid random decorative animation.
- Every motion answers: what layer of the system is being revealed?

## 1. Initial Load

Keyframe 0:
Blank warm-white page with faint grid.

Keyframe 1:
Paper grain and blueprint ticks fade in.

Keyframe 2:
Navigation appears as a translucent command strip.

Keyframe 3:
Hero copy slides in from 16px below.

Keyframe 4:
Glass interface engine assembles from three stacked layers.

Implementation:
- CSS transitions for text.
- Staggered layer transforms.
- Later upgrade: Three.js/R3F browser model.

## 2. Hold To Reshape

Trigger:
Pointer down on the interface engine.

Keyframe 0:
Default stacked glass browser object.

Keyframe 1:
Hold progress ring expands from the center.

Keyframe 2:
The three interface layers separate.

Keyframe 3:
The label changes from "Hold to reshape" to "System open."

Keyframe 4:
Future version: annotation lines draw out to labels such as content layer, intent layer, proof layer, interface layer.

Implementation:
- React state tracks hold progress from 0 to 1.
- CSS variable `--hold` drives transforms.
- Pointer cancel resets if released early.

## 3. Scroll Progress

Trigger:
Page scroll.

Effect:
Thin top rail scales from left to right.

Future upgrade:
Use the scroll value to rotate the interface engine and transition it from hero object into the proof-board layout.

## 4. Thinking Cards

Trigger:
Cards enter viewport.

Keyframe 0:
Cards sit 20px lower with low opacity.

Keyframe 1:
Cards rise into place.

Keyframe 2:
Hover lifts the card and increases shadow.

Future upgrade:
Article cards can open as side drawers with the full X post embedded or summarized.

## 5. Operating Pattern Board

Trigger:
Scroll into section.

Keyframe 0:
Cards are faint and slightly offset.

Keyframe 1:
Cards stamp in one by one.

Keyframe 2:
Dashed connector lines appear behind them.

Future upgrade:
Hovering a domain draws a path: unknown system -> learned primitives -> shipped artifact -> proof metric.

## 6. Selected Work

Trigger:
Scroll into section.

Effect:
Main Mirage card pins slightly longer than the side cards, but not enough to make the site feel like a Mirage landing page.

Future upgrade:
Each work card expands into a mini case file with proof screenshots and links.

## 7. Proof Command Center

Trigger:
Scroll into final section or press `/`.

Keyframe 0:
Command panel fades in.

Keyframe 1:
Proof rows appear sequentially.

Keyframe 2:
Keyboard hints become visible.

Future upgrade:
Pressing `/` anywhere opens a global command palette.
