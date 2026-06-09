# 05-animation-specifications.md

# MOTION & ANIMATION SPECIFICATION

## OVERVIEW

Animation là linh hồn của sản phẩm.

Người dùng là UIUX Designer nên animation phải:

* Mượt
* Có chủ đích
* Không lạm dụng
* Có storytelling
* Mang cảm giác premium

Tuyệt đối tránh:

* Animation giật
* Hiệu ứng màu mè quá mức
* Hiệu ứng web năm 2015

---

# MOTION PRINCIPLES

## Principle 1

Everything Has Meaning

Mỗi animation đều phải hỗ trợ cảm xúc.

Không có animation chỉ để trang trí.

---

## Principle 2

Soft & Dreamy

Tốc độ chuyển động:

Chậm hơn web thông thường khoảng 15-20%.

---

## Principle 3

Depth

Luôn có:

* Foreground
* Midground
* Background

để tạo chiều sâu.

---

# ANIMATION STACK

## Framer Motion

Dùng cho:

* UI transition
* Card animation
* Fade
* Slide
* Scale

---

## GSAP

Dùng cho:

* Scroll storytelling
* Cinematic timeline
* Camera transition

---

## React Three Fiber

Dùng cho:

* Galaxy
* Stars
* Aurora
* 3D Environment

---

# GLOBAL BACKGROUND ANIMATION

## Galaxy Layer

Always Active

---

Movement

Very Slow

Duration:

60s

Loop Infinite

---

Transform

```javascript
rotationY += 0.0002
rotationX += 0.00005
```

---

Purpose

Tạo cảm giác vũ trụ đang sống.

---

# STAR PARTICLES

## Count

150-200

---

Behavior

Twinkle

Random

---

Opacity

0.2 - 1

---

Cycle

3s - 8s

---

# FLOATING DUST

## Count

30-50

---

Size

2px - 6px

---

Movement

Floating

Random Path

---

Speed

Very Slow

---

Purpose

Tạo chiều sâu.

---

# AURORA SYSTEM

## Layer

Background

---

Animation

Gradient Shift

---

Duration

25s

Infinite

---

Colors

Lavender

Pink

Blue

---

# SCREEN 00

COUNTDOWN

---

Entry

Fade In

1.2s

---

Countdown Digits

Glass Morph

Pulse nhẹ mỗi giây

---

Portal Trigger

Khi countdown = 0

---

Sequence

Glow

↓

Scale

↓

Expand

↓

Galaxy Warp

---

Duration

5s

---

# SCREEN 01

OPENING CINEMATIC

---

Camera

Fly Through Galaxy

---

Duration

8s

---

Sequence

Date

↓

Birthday Message

↓

Personal Message

↓

Universe Reveal

---

Text Animation

Opacity

0 → 100

TranslateY

20px → 0

---

Duration

1s

---

# SCREEN 02

GALAXY MAP

## GEMINI CONSTELLATION ANIMATION

Khi người dùng mở một Memory Star.

Ngôi sao tương ứng trên Gemini Constellation sẽ sáng lên.

---

Constellation Progress

0/7

1/7

2/7

...

7/7

---

Khi đạt 7/7

Kích hoạt Gemini Completion Sequence.

---

Animation Timeline

Step 1

Toàn bộ background tối lại.

---

Step 2

Các đường nối của Gemini được vẽ bằng light trails.

---

Step 3

Castor và Pollux phát sáng mạnh nhất.

---

Step 4

Aurora chuyển sang tím pastel sáng.

---

Step 5

Camera zoom out.

Hiện toàn bộ hình Gemini.

---

Step 6

Text xuất hiện:

"Mọi vì sao cuối cùng đều dẫn anh đến em."

---

Step 7

Transition tới Final Letter.


---

Entry

Camera Pull Back

---

Duration

2s

---

Star Nodes

Idle State

---

Animation

Breathing Glow

Scale

1

↓

1.05

↓

1

---

Duration

4s

Loop

Infinite

---

Hover/Tap

Glow Increase

Scale

1.1

---

Opened State

Persistent Glow

---

# SCREEN 03

CHÚNG TA ĐÃ BỎ LỠ NHAU

---

Scene A

Hai ngôi sao ở xa nhau

---

Distance

80% screen width

---

Scene B

Text xuất hiện

---

Animation

Fade

Slide Up

---

Scene C

Hai ngôi sao từ từ tiến lại gần

---

Duration

8s

---

Scene D

Constellation Formation

---

Line Drawing

SVG Path

---

Duration

2s

---

Purpose

Minh họa việc từ xa lạ trở thành người đặc biệt.

---

# SCREEN 04

CÁI ÔM ĐẦU TIÊN

---

Motion Style

Slow

Gentle

---

Particles

Lavender Hearts

Very Small

---

Opacity

10%

---

Background

Blur Increase

---

Text

Hand Reveal

---

Duration

6s

---

Purpose

Cảm xúc đầu tiên.

---

# SCREEN 05

TRỊ AN

---

3D Card

Tilt Effect

---

Rotation

X

Y

Theo ngón tay

---

Range

5° - 10°

---

Background

Moving Stars

Moon Glow

---

Campfire

Soft Flicker

---

Duration

Infinite

---

# SCREEN 06

20 ĐIỀU ANH THÍCH Ở EM

---

Interaction

Tinder Swipe

---

Swipe Right

Next Card

---

Animation

Spring

---

Physics

Natural

---

Card Stack

3 layers visible

---

Rotation

Random

-3°

to

+3°

---

# SCREEN 07

PHOTO UNIVERSE

---

Photo Entry

Floating In

---

Duration

1.5s

---

Movement

Slow Drift

---

Range

20px

---

Tap

Zoom To Center

---

Duration

0.6s

---

Close

Shrink Back

---

# SCREEN 08

GEMINI MODE

---

Constellation Animation

Draw Line

---

Duration

2s

---

Stars

Sequential Glow

---

Delay

0.2s

Between Nodes

---

Purpose

Mang cảm giác khám phá.

---

# SCREEN 09

FUTURE STARS

---

Locked Stars

Low Opacity

---

Tap

Glow

---

Reveal Message

Fade Up

---

Purpose

Tương lai đang chờ mở khóa.

---

# SECRET STARS

---

Appear

Floating Randomly

---

Visibility

70%

Không quá khó tìm.

---

Pulse

6s Loop

---

# FINAL LETTER

---

MOST IMPORTANT SCENE

---

Galaxy

Fade Out

---

Duration

5s

---

Single Star

Move To Center

---

Transform

Star

↓

Light

↓

Letter

---

Duration

6s

---

Handwriting Animation

SVG Stroke Draw

---

Duration

60-90s

---

Voice Player

Waveform

Real Time

---

Ending

Stars Slowly Fade

---

Final Text

Opacity

0 → 100

Duration

3s

---

# PERFORMANCE RULES

Target FPS

60fps

---

Mobile Minimum

45fps

---

Use

Instanced Mesh

for Stars

---

Lazy Load

Images

Audio

ThreeJS Assets

---

Avoid

Heavy Post Processing

Mobile Devices

---

Animation Priority

Final Letter

Galaxy

Stars

Photos

Everything Else
