---
name: frontend-slides
description: Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.
---

# Frontend Slides Skill

Create zero-dependency, animation-rich HTML presentations that run entirely in the browser. This skill helps non-designers discover their preferred aesthetic through visual exploration ("show, don't tell"), then generates production-quality slide decks.

**This skill is fully self-contained.** All style presets, logo SVG path data, HTML/CSS/JS templates, and workflow rules live in this file. Do not read or depend on any external reference files.

## Core Philosophy

1. **Zero Dependencies** — Single HTML files with inline CSS/JS. No npm, no build tools.
2. **Show, Don't Tell** — People don't know what they want until they see it. Generate visual previews, not abstract choices.
3. **Distinctive Design** — Avoid generic "AI slop" aesthetics. Every presentation should feel custom-crafted.
4. **Production Quality** — Code should be well-commented, accessible, and performant.
5. **Candescent Branding** — All presentations include the Candescent logo in the top-left corner.

---

## Phase 0: Detect Mode

First, determine what the user wants:

**Mode A: New Presentation**
- User wants to create slides from scratch
- Proceed to Phase 1 (Content Discovery)

**Mode B: PPT Conversion**
- User has a PowerPoint file (.ppt, .pptx) to convert
- Proceed to Phase 4 (PPT Extraction)

**Mode C: Existing Presentation Enhancement**
- User has an HTML presentation and wants to improve it
- Read the existing file, understand the structure, then enhance

---

## Phase 1: Content Discovery (New Presentations)

Before designing, understand the content. Ask via AskUserQuestion:

### Step 1.1: Presentation Context

**Question 1: Purpose**
- Header: "Purpose"
- Question: "What is this presentation for?"
- Options:
  - "Pitch deck" — Selling an idea, product, or company to investors/clients
  - "Teaching/Tutorial" — Explaining concepts, how-to guides, educational content
  - "Conference talk" — Speaking at an event, tech talk, keynote
  - "Internal presentation" — Team updates, strategy meetings, company updates

**Question 2: Slide Count**
- Header: "Length"
- Question: "Approximately how many slides?"
- Options:
  - "Short (5-10)" — Quick pitch, lightning talk
  - "Medium (10-20)" — Standard presentation
  - "Long (20+)" — Deep dive, comprehensive talk

**Question 3: Content**
- Header: "Content"
- Question: "Do you have the content ready, or do you need help structuring it?"
- Options:
  - "I have all content ready" — Just need to design the presentation
  - "I have rough notes" — Need help organizing into slides
  - "I have a topic only" — Need help creating the full outline

If user has content, ask them to share it (text, bullet points, images, etc.).

---

## Phase 2: Style Discovery (Visual Exploration)

**CRITICAL: This is the "show, don't tell" phase.**

Most people can't articulate design preferences in words. Instead of asking "do you want minimalist or bold?", we generate mini-previews and let them react.

### Step 2.1: Mood Selection

**Question 1: Feeling**
- Header: "Vibe"
- Question: "What feeling should the audience have when viewing your slides?"
- Options:
  - "Impressed/Confident" — Professional, trustworthy, this team knows what they're doing
  - "Excited/Energized" — Innovative, bold, this is the future
  - "Calm/Focused" — Clear, thoughtful, easy to follow
  - "Inspired/Moved" — Emotional, storytelling, memorable
- multiSelect: true (can choose up to 2)

### Step 2.2: Generate Style Previews

Based on their mood selection, generate **3 distinct style previews** as mini HTML files in a temporary directory. Each preview should be a single title slide showing:

- Typography (font choices, heading/body hierarchy)
- Color palette (background, accent, text colors)
- Animation style (how elements enter)
- Overall aesthetic feel

**Preview Styles to Consider (pick 3 based on mood):**

**NOTE: "Candescent" is the DEFAULT theme and should always be offered as an option.**

| Mood | Style Options |
|------|---------------|
| Impressed/Confident | **"Candescent" (default)**, "Corporate Elegant", "Dark Executive" |
| Excited/Energized | **"Candescent" (default)**, "Neon Cyber", "Bold Gradients" |
| Calm/Focused | **"Candescent" (default)**, "Paper & Ink", "Swiss Minimal" |
| Inspired/Moved | **"Candescent" (default)**, "Cinematic Dark", "Warm Editorial" |

**IMPORTANT: Never use these generic patterns:**
- Purple gradients on white backgrounds
- Inter, Roboto, or system fonts
- Standard blue primary colors
- Predictable hero layouts

**Instead, use distinctive choices:**
- Unique font pairings (Clash Display, Satoshi, Cormorant Garamond, DM Sans, etc.)
- Cohesive color themes with personality
- Atmospheric backgrounds (gradients, subtle patterns, depth)
- Signature animation moments

### Step 2.3: Present Previews

Create the previews in: `.claude-design/slide-previews/`

```
.claude-design/slide-previews/
├── style-a.html   # First style option
├── style-b.html   # Second style option
├── style-c.html   # Third style option
└── assets/        # Any shared assets
```

Each preview file should be:
- Self-contained (inline CSS/JS)
- A single "title slide" showing the aesthetic
- Animated to demonstrate motion style
- ~50-100 lines, not a full presentation

Present to user:
```
I've created 3 style previews for you to compare:

**Style A: [Name]** — [1 sentence description]
**Style B: [Name]** — [1 sentence description]
**Style C: [Name]** — [1 sentence description]

Open each file to see them in action:
- .claude-design/slide-previews/style-a.html
- .claude-design/slide-previews/style-b.html
- .claude-design/slide-previews/style-c.html

Take a look and tell me:
1. Which style resonates most?
2. What do you like about it?
3. Anything you'd change?
```

Then use AskUserQuestion:

**Question: Pick Your Style**
- Header: "Style"
- Question: "Which style preview do you prefer?"
- Options:
  - "Style A: [Name]" — [Brief description]
  - "Style B: [Name]" — [Brief description]
  - "Style C: [Name]" — [Brief description]
  - "Mix elements" — Combine aspects from different styles

If "Mix elements", ask for specifics.

---

## Phase 3: Generate Presentation

Now generate the full presentation based on:
- Content from Phase 1
- Style from Phase 2

### File Structure

For single presentations:
```
presentation.html    # Self-contained presentation
assets/              # Images, if any
```

For projects with multiple presentations:
```
[presentation-name].html
[presentation-name]-assets/
```

### Required Logo Header

**All presentations MUST include the Candescent logo header in the top-left corner.**

Two options are available:

**Option A: CDN URL (requires internet)**
```html
<header class="slide-header" role="banner">
    <a href="https://www.candescent.com/" target="_blank" rel="noopener" aria-label="Candescent">
        <img src="https://cdn.prod.website-files.com/672c8bafbeffacdb79421b7d/6733c7c9ffbc48b520a5ca43_Logo.svg" 
             alt="Candescent" class="logo-candescent">
    </a>
</header>
```

**Option B: Inline SVG Wordmark (works offline, self-contained) - RECOMMENDED**
```html
<header class="slide-header" role="banner">
    <a href="https://www.candescent.com/" target="_blank" rel="noopener" aria-label="Candescent">
        <svg class="logo-candescent" viewBox="38 14 156 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.6001 35.8233C44.1926 35.8233 42.923 35.5241 41.7869 34.9259C40.6507 34.3277 39.7537 33.4533 39.1006 32.2936C38.4428 31.1386 38.1162 29.7672 38.1162 28.1888C38.1162 26.6103 38.4428 25.2482 39.1006 24.1115C39.7583 22.9748 40.6599 22.1143 41.8191 21.539C42.9736 20.9408 44.2846 20.6417 45.7519 20.6417C47.0996 20.6417 48.2956 20.8948 49.3352 21.3964C50.3977 21.8796 51.2441 22.5423 51.8788 23.3936C52.5136 24.2403 52.9092 25.1837 53.0656 26.2284H49.8871C49.7537 25.7083 49.5237 25.2159 49.1926 24.7558C48.8844 24.2956 48.452 23.9182 47.8908 23.6283C47.3296 23.32 46.6305 23.1681 45.7795 23.1681C44.8549 23.1681 44.0546 23.3798 43.3784 23.8032C42.7206 24.2265 42.233 24.8248 41.9065 25.5933C41.5799 26.348 41.4143 27.204 41.4143 28.1703C41.4143 29.6752 41.7915 30.9085 42.5412 31.8749C43.3094 32.8412 44.3904 33.3198 45.7795 33.3198C47.0536 33.3198 48.015 32.9701 48.6682 32.2798C49.3444 31.5665 49.7675 30.6784 49.9423 29.6199H53.1208C52.9874 30.775 52.6102 31.8242 51.9938 32.7722C51.3959 33.7156 50.5495 34.4703 49.4501 35.0271C48.3738 35.5656 47.0904 35.8371 45.6047 35.8371L45.6001 35.8233ZM58.4658 35.7358C57.095 35.7358 56.0095 35.4091 55.1999 34.751C54.4087 34.093 54.0132 33.1496 54.0132 31.9163C54.0132 31.0097 54.234 30.278 54.6801 29.7212C55.1401 29.1413 55.7795 28.6719 56.5891 28.3038C57.3986 27.9172 58.498 27.5215 59.8871 27.1165L60.2045 27.0291C61.1889 26.7576 61.911 26.5367 62.371 26.3618C62.854 26.1685 63.2174 25.9476 63.4704 25.6945C63.7418 25.423 63.8752 25.0779 63.8752 24.6545C63.8752 24.0931 63.6452 23.6789 63.1806 23.412C62.7344 23.1221 62.0904 22.9794 61.2441 22.9794C60.1263 22.9794 59.2294 23.2417 58.5578 23.7618C57.8816 24.2634 57.5366 24.9766 57.5182 25.9016H54.3949C54.5099 24.8616 54.8687 23.9458 55.4667 23.1543C56.0647 22.3444 56.8834 21.7185 57.923 21.2767C58.9626 20.835 60.1585 20.6095 61.5063 20.6095C63.2404 20.6095 64.6203 21.0052 65.6415 21.7968C66.681 22.5653 67.2008 23.8032 67.2008 25.5013V30.7336C67.2008 31.3917 67.256 31.8979 67.3756 32.266C67.4906 32.6296 67.6562 32.9011 67.8678 33.0759C68.0794 33.2324 68.3508 33.306 68.6774 33.306C69.0408 33.306 69.3213 33.2186 69.5145 33.0437V35.0087C69.2615 35.1606 68.9442 35.2894 68.5624 35.3861C68.199 35.4827 67.7804 35.5287 67.3204 35.5287C66.3545 35.5287 65.5449 35.2112 64.8917 34.5762C64.2339 33.9411 63.9074 32.9839 63.9074 31.7138V31.4515L64.2569 31.5665C63.8706 32.763 63.1852 33.757 62.2054 34.5485C61.2211 35.3401 59.9791 35.7358 58.475 35.7358H58.4658ZM59.3305 33.4533C60.1585 33.4533 60.9221 33.2324 61.6121 32.786C62.3066 32.3258 62.854 31.6954 63.2588 30.9085C63.6636 30.0985 63.866 29.192 63.866 28.1888V26.5413L64.0684 26.4538C64.0684 26.937 63.9442 27.3328 63.6912 27.6411C63.4382 27.931 63.1024 28.1703 62.6792 28.3636C62.256 28.5569 61.6167 28.7962 60.7703 29.0861L60.6277 29.1413C59.7583 29.4313 59.1052 29.6798 58.6636 29.896C58.2174 30.1077 57.8816 30.3562 57.6516 30.6508C57.4216 30.9223 57.302 31.2674 57.302 31.6908C57.302 32.289 57.4952 32.7308 57.8816 33.0207C58.268 33.3106 58.751 33.4533 59.3259 33.4533H59.3305ZM70.5127 35.3309V21.1295H73.9533V35.3309H70.5127ZM80.6875 35.3309V26.8542C80.6875 25.6393 80.4483 24.742 79.9653 24.1667C79.5053 23.5685 78.7924 23.2694 77.8264 23.2694C76.75 23.2694 75.8531 23.6283 75.1401 24.3416C74.4455 25.0365 74.0315 25.8924 73.8982 26.9186L73.4934 25.0411C73.8798 23.7664 74.5835 22.7171 75.6047 21.8888C76.6258 21.0605 77.9184 20.6463 79.4777 20.6463C80.9405 20.6463 82.0812 21.0973 82.8862 22.0038C83.6958 22.892 84.1005 24.3002 84.1005 26.2238V35.3355H80.6875V35.3309ZM96.9202 31.0511V14.1945H100.361V35.3309H96.9202V31.0511ZM91.6028 35.561C90.3517 35.561 89.2707 35.2434 88.3646 34.6084C87.4584 33.9503 86.773 33.0759 86.313 31.9761C85.8715 30.8578 85.6461 29.5969 85.6461 28.1888C85.6461 26.7806 85.8853 25.4782 86.3682 24.3416C86.8512 23.2049 87.5642 22.3076 88.5072 21.6541C89.4731 20.996 90.6277 20.6693 91.9754 20.6693C93.1714 20.6693 94.2109 20.9408 95.0987 21.4792C96.0048 21.9992 96.7178 22.7033 97.2376 23.5915L97.2652 26.1041C96.8788 25.1791 96.2992 24.4152 95.5311 23.8216C94.7813 23.2049 93.9303 22.8966 92.9874 22.8966C91.7914 22.8966 90.8485 23.3798 90.1539 24.3416C89.4777 25.285 89.1419 26.5781 89.1419 28.2164C89.1419 29.6844 89.4501 30.8855 90.0665 31.8334C90.7013 32.7584 91.635 33.2232 92.8724 33.2232C93.7371 33.2232 94.4731 32.9839 95.0665 32.5007C95.6829 31.9991 96.1382 31.3364 96.4234 30.5035C96.7316 29.6752 96.8834 28.7502 96.8834 27.7286L97.7804 28.1059C97.7804 29.4543 97.5412 30.6968 97.0582 31.838C96.5982 32.9747 95.8945 33.8813 94.9515 34.5577C94.0269 35.2342 92.9092 35.5702 91.5982 35.5702L91.6028 35.561ZM109.574 35.8509C108.112 35.8509 106.801 35.561 105.641 34.9811C104.487 34.3829 103.572 33.5131 102.895 32.3765C102.238 31.2214 101.911 29.85 101.911 28.2716C101.911 26.6931 102.238 25.354 102.895 24.1943C103.567 23.0393 104.487 22.1511 105.641 21.5344C106.796 20.9178 108.098 20.6095 109.542 20.6095C110.986 20.6095 112.334 20.9178 113.475 21.5344C114.611 22.1511 115.499 23.0393 116.134 24.1943C116.768 25.3494 117.086 26.6793 117.086 28.1842H104.423L103.756 25.9568H114.712L113.815 27.5169C113.815 26.6701 113.641 25.9154 113.296 25.262C112.969 24.5855 112.486 24.0655 111.851 23.7019C111.216 23.3154 110.444 23.1221 109.537 23.1221C108.631 23.1221 107.849 23.3246 107.196 23.7295C106.538 24.1161 106.032 24.6821 105.664 25.4368C105.315 26.1685 105.145 27.0567 105.145 28.0967C105.145 29.1367 105.329 30.0433 105.692 30.8164C106.055 31.5711 106.58 32.1556 107.251 32.5789C107.928 33.0023 108.723 33.214 109.652 33.214C110.789 33.214 111.695 32.9149 112.371 32.3166C113.066 31.7 113.498 30.9683 113.673 30.1215H116.971C116.796 31.1247 116.4 32.0589 115.784 32.9287C115.186 33.7938 114.358 34.4979 113.3 35.0409C112.261 35.5794 111.019 35.8509 109.57 35.8509H109.574ZM125.264 35.8187C123.24 35.8187 121.594 35.3585 120.319 34.4289C119.045 33.5039 118.305 32.2108 118.093 30.5541H121.331C121.483 31.5205 121.902 32.2614 122.573 32.7814C123.25 33.283 124.165 33.5361 125.319 33.5361C126.129 33.5361 126.787 33.4119 127.284 33.1588C127.803 32.8873 128.066 32.4731 128.066 31.9163C128.066 31.5113 127.914 31.1616 127.606 30.8762C127.316 30.5679 126.902 30.2964 126.364 30.0663C125.844 29.8362 125.112 29.5555 124.17 29.2288L123.967 29.1736C122.716 28.7318 121.741 28.3452 121.051 28.0185C120.379 27.6918 119.818 27.2592 119.372 26.7162C118.930 26.1777 118.705 25.4921 118.705 24.6637C118.705 23.3522 119.243 22.349 120.324 21.6541C121.4 20.9592 122.822 20.6141 124.574 20.6141C126.502 20.6141 128.024 21.0282 129.142 21.8566C130.278 22.6849 130.963 23.8216 131.193 25.2666H127.983C127.868 24.5349 127.509 23.955 126.916 23.5317C126.318 23.1083 125.536 22.8966 124.574 22.8966C123.746 22.8966 123.093 23.0301 122.610 23.3016C122.150 23.5731 121.916 23.9688 121.916 24.4888C121.916 24.8754 122.040 25.2021 122.293 25.4736C122.546 25.7268 122.937 25.966 123.480 26.1961C124.041 26.4262 124.869 26.7162 125.963 27.0659L126.078 27.0935C127.33 27.4985 128.323 27.8942 129.059 28.2808C129.809 28.6673 130.379 29.1183 130.766 29.6383C131.170 30.1584 131.373 30.8026 131.373 31.5757C131.373 32.9839 130.802 34.0423 129.666 34.7556C128.53 35.4689 127.063 35.8279 125.273 35.8279L125.264 35.8187ZM139.772 35.8187C138.365 35.8187 137.095 35.5195 135.954 34.9213C134.818 34.323 133.921 33.4487 133.268 32.289C132.610 31.134 132.284 29.7626 132.284 28.1842C132.284 26.6057 132.610 25.2436 133.268 24.1069C133.926 22.9702 134.827 22.1097 135.986 21.5344C137.141 20.9362 138.452 20.6371 139.919 20.6371C141.267 20.6371 142.463 20.8902 143.503 21.3918C144.565 21.875 145.411 22.5377 146.046 23.389C146.681 24.2357 147.077 25.1791 147.228 26.2238H144.05C143.917 25.7037 143.687 25.2113 143.355 24.7512C143.047 24.291 142.615 23.9136 142.054 23.6237C141.497 23.3154 140.793 23.1635 139.947 23.1635C139.022 23.1635 138.222 23.3752 137.546 23.7986C136.888 24.2219 136.400 24.8202 136.074 25.5887C135.747 26.3434 135.582 27.1994 135.582 28.1657C135.582 29.6706 135.959 30.9039 136.709 31.8703C137.477 32.8366 138.558 33.3152 139.947 33.3152C141.221 33.3152 142.182 32.9655 142.836 32.2752C143.507 31.5619 143.935 30.6738 144.110 29.6153H147.288C147.155 30.7704 146.778 31.8196 146.161 32.7676C145.563 33.711 144.717 34.4657 143.618 35.0225C142.537 35.561 141.258 35.8325 139.772 35.8325V35.8187ZM155.899 35.8509C154.436 35.8509 153.125 35.561 151.966 34.9811C150.812 34.3829 149.896 33.5131 149.220 32.3765C148.562 31.2214 148.236 29.85 148.236 28.2716C148.236 26.6931 148.562 25.354 149.220 24.1943C149.892 23.0393 150.812 22.1511 151.966 21.5344C153.121 20.9178 154.422 20.6095 155.867 20.6095C157.311 20.6095 158.663 20.9178 159.800 21.5344C160.936 22.1511 161.824 23.0393 162.458 24.1943C163.093 25.3494 163.410 26.6793 163.410 28.1842H150.747L150.085 25.9568H161.037L160.140 27.5169C160.140 26.6701 159.965 25.9154 159.620 25.262C159.294 24.5855 158.811 24.0655 158.176 23.7019C157.541 23.3154 156.768 23.1221 155.862 23.1221C154.956 23.1221 154.174 23.3246 153.521 23.7295C152.863 24.1161 152.357 24.6821 151.989 25.4368C151.640 26.1685 151.469 27.0567 151.469 28.0967C151.469 29.1367 151.653 30.0433 152.017 30.8164C152.380 31.5711 152.905 32.1556 153.576 32.5789C154.248 33.0023 155.048 33.214 155.977 33.214C157.113 33.214 158.020 32.9149 158.696 32.3166C159.390 31.7 159.823 30.9683 159.997 30.1215H163.296C163.121 31.1247 162.725 32.0589 162.109 32.9287C161.511 33.7938 160.683 34.4979 159.620 35.0409C158.581 35.5794 157.339 35.8509 155.890 35.8509H155.899ZM165.030 35.3309V21.1295H168.470V35.3309H165.030ZM175.204 35.3309V26.8542C175.204 25.6393 174.965 24.742 174.482 24.1667C174.022 23.5685 173.305 23.2694 172.343 23.2694C171.267 23.2694 170.370 23.6283 169.657 24.3416C168.962 25.0365 168.548 25.8924 168.415 26.9186L168.010 25.0411C168.397 23.7664 169.100 22.7171 170.122 21.8888C171.143 21.0605 172.435 20.6463 173.995 20.6463C175.462 20.6463 176.598 21.0973 177.403 22.0038C178.213 22.892 178.617 24.3002 178.617 26.2238V35.3355H175.209L175.204 35.3309ZM187.251 35.6208C185.784 35.6208 184.648 35.1974 183.843 34.3461C183.033 33.4993 182.629 32.1188 182.629 30.209V17.3974L185.954 15.0274H186.042V30.209C186.042 31.2306 186.244 31.9623 186.649 32.4041C187.072 32.8274 187.642 33.0391 188.355 33.0391C189.510 33.0391 190.434 32.5881 191.129 31.6816L191.561 33.8767C191.157 34.3599 190.591 34.774 189.855 35.1192C189.123 35.4459 188.254 35.6116 187.256 35.6116L187.251 35.6208ZM179.620 21.1295H190.605V23.5317H179.620V21.1295Z" fill="#ECECEC"/>
        </svg>
    </a>
</header>
```

### HTML Architecture

Follow this structure for all presentations (Candescent theme by default):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentation Title</title>

    <!-- Fonts: Candescent-style clean typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        /* ===========================================
           CSS CUSTOM PROPERTIES (CANDESCENT THEME - DEFAULT)
           Experience-led, intelligent, professional fintech
           =========================================== */
        :root {
            /* Candescent Colors */
            --bg-primary: #0a0e17;
            --bg-secondary: #121827;
            --bg-tertiary: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --accent: #0ea5e9;
            --accent-light: #38bdf8;
            --accent-secondary: #06b6d4;
            --gold: #eab308;
            --gold-dim: rgba(234, 179, 8, 0.15);
            --border: rgba(148, 163, 184, 0.12);

            /* Typography */
            --font-display: 'Libre Baskerville', Georgia, serif;
            --font-body: 'Source Sans 3', -apple-system, sans-serif;

            /* Spacing */
            --slide-padding: clamp(3rem, 6vw, 5rem);

            /* Animation */
            --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
            --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
            --duration-normal: 0.5s;
            --duration-slow: 0.8s;
        }

        /* ===========================================
           CANDESCENT LOGO HEADER (all slides)
           =========================================== */
        .slide-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99;
            padding: 1rem 2rem;
            background-color: rgba(8, 23, 40, 0);
            pointer-events: none;
        }

        .slide-header a { pointer-events: auto; }

        .slide-header img.logo-candescent,
        .slide-header svg.logo-candescent {
            height: 56px;
            width: auto;
            display: block;
            opacity: 0.98;
        }

        .slide-header a:hover img.logo-candescent,
        .slide-header a:hover svg.logo-candescent { opacity: 1; }

        /* ===========================================
           PROGRESS BAR
           =========================================== */
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
            z-index: 100;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.2s var(--ease-smooth);
        }

        /* ===========================================
           NAV DOTS
           =========================================== */
        .nav-dots {
            position: fixed;
            right: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 98;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .nav-dots button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: transparent;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
        }
        .nav-dots button:hover,
        .nav-dots button.active {
            background: var(--accent);
            border-color: var(--accent);
        }
        .nav-dots button.active { transform: scale(1.2); }

        /* ===========================================
           BASE STYLES
           =========================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            scroll-snap-type: y mandatory;
        }

        body {
            font-family: var(--font-body);
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
        }

        /* ===========================================
           SLIDE CONTAINER
           Each section is one slide
           =========================================== */
        .slide {
            min-height: 100vh;
            padding: var(--slide-padding);
            padding-top: 5rem;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        /* ===========================================
           ANIMATIONS
           Trigger via .visible class (added by JS on scroll)
           =========================================== */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity var(--duration-normal) var(--ease-out-expo),
                        transform var(--duration-normal) var(--ease-out-expo);
        }

        .slide.visible .reveal {
            opacity: 1;
            transform: translateY(0);
        }

        /* Stagger children */
        .reveal:nth-child(1) { transition-delay: 0.1s; }
        .reveal:nth-child(2) { transition-delay: 0.2s; }
        .reveal:nth-child(3) { transition-delay: 0.3s; }
        .reveal:nth-child(4) { transition-delay: 0.4s; }

        /* ... more styles ... */
    </style>
</head>
<body>
    <!-- Candescent Logo - top left on all slides (REQUIRED) -->
    <header class="slide-header" role="banner">
        <a href="https://www.candescent.com/" target="_blank" rel="noopener" aria-label="Candescent">
            <img src="https://cdn.prod.website-files.com/672c8bafbeffacdb79421b7d/6733c7c9ffbc48b520a5ca43_Logo.svg" 
                 alt="Candescent" class="logo-candescent">
        </a>
    </header>

    <!-- Progress bar -->
    <div class="progress-bar" id="progressBar"></div>

    <!-- Navigation dots -->
    <nav class="nav-dots" id="navDots" aria-label="Slide navigation"></nav>

    <!-- Slides -->
    <section class="slide title-slide">
        <h1 class="reveal">Presentation Title</h1>
        <p class="reveal">Subtitle or author</p>
    </section>

    <section class="slide">
        <h2 class="reveal">Slide Title</h2>
        <p class="reveal">Content...</p>
    </section>

    <!-- More slides... -->

    <script>
        /* ===========================================
           SLIDE PRESENTATION CONTROLLER
           Handles navigation, animations, and interactions
           =========================================== */

        class SlidePresentation {
            constructor() {
                this.slides = document.querySelectorAll('.slide');
                this.progressBar = document.getElementById('progressBar');
                this.navDots = document.getElementById('navDots');
                this.current = 0;
                this.total = this.slides.length;

                this.createDots();
                this.observeVisibility();
                this.bindKeys();
                this.bindWheel();
                this.bindTouch();
                this.updateProgress();
            }

            createDots() {
                this.slides.forEach((_, i) => {
                    const btn = document.createElement('button');
                    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    btn.addEventListener('click', () => this.goTo(i));
                    this.navDots.appendChild(btn);
                });
            }

            observeVisibility() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            const idx = Array.from(this.slides).indexOf(entry.target);
                            if (idx !== -1) { this.current = idx; this.updateProgress(); this.updateDots(); }
                        }
                    });
                }, { threshold: 0.5, rootMargin: '0px' });
                this.slides.forEach(s => observer.observe(s));
            }

            goTo(index) {
                index = Math.max(0, Math.min(index, this.total - 1));
                this.slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
                this.current = index;
                this.updateProgress();
                this.updateDots();
            }

            updateProgress() {
                const pct = ((this.current + 1) / this.total) * 100;
                this.progressBar.style.transform = `scaleX(${pct / 100})`;
            }

            updateDots() {
                this.navDots.querySelectorAll('button').forEach((btn, i) => {
                    btn.classList.toggle('active', i === this.current);
                });
            }

            bindKeys() {
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); this.goTo(this.current + 1); }
                    if (e.key === 'ArrowLeft') { e.preventDefault(); this.goTo(this.current - 1); }
                });
            }

            bindWheel() {
                let last = 0;
                document.addEventListener('wheel', (e) => {
                    const now = Date.now();
                    if (now - last < 400) return;
                    if (e.deltaY > 30) { last = now; this.goTo(this.current + 1); }
                    if (e.deltaY < -30) { last = now; this.goTo(this.current - 1); }
                }, { passive: true });
            }

            bindTouch() {
                let startY = 0;
                document.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; }, { passive: true });
                document.addEventListener('touchend', (e) => {
                    const endY = e.changedTouches[0].clientY;
                    if (startY - endY > 50) this.goTo(this.current + 1);
                    if (endY - startY > 50) this.goTo(this.current - 1);
                }, { passive: true });
            }
        }

        new SlidePresentation();
    </script>
</body>
</html>
```

### Required JavaScript Features

Every presentation should include:

1. **SlidePresentation Class** — Main controller
   - Keyboard navigation (arrows, space)
   - Touch/swipe support
   - Mouse wheel navigation
   - Progress bar updates
   - Navigation dots

2. **Intersection Observer** — For scroll-triggered animations
   - Add `.visible` class when slides enter viewport
   - Trigger CSS animations efficiently

3. **Optional Enhancements** (based on style):
   - Custom cursor with trail
   - Particle system background (canvas)
   - Parallax effects
   - 3D tilt on hover
   - Magnetic buttons
   - Counter animations

### Code Quality Requirements

**Comments:**
Every section should have clear comments explaining:
- What it does
- Why it exists
- How to modify it

```javascript
/* ===========================================
   CUSTOM CURSOR
   Creates a stylized cursor that follows mouse with a trail effect.
   - Uses lerp (linear interpolation) for smooth movement
   - Grows larger when hovering over interactive elements
   =========================================== */
class CustomCursor {
    constructor() {
        // ...
    }
}
```

**Accessibility:**
- Semantic HTML (`<section>`, `<nav>`, `<main>`)
- Keyboard navigation works
- ARIA labels where needed
- Reduced motion support

```css
@media (prefers-reduced-motion: reduce) {
    .reveal {
        transition: opacity 0.3s ease;
        transform: none;
    }
}
```

**Responsive:**
- Mobile-friendly (single column, adjusted spacing)
- Disable heavy effects on mobile
- Touch-friendly interactions

```css
@media (max-width: 768px) {
    .nav-dots,
    .keyboard-hint {
        display: none;
    }
}
```

---

## Phase 4: PPT Conversion

When converting PowerPoint files:

### Step 4.1: Extract Content

Use Python with `python-pptx` to extract:

```python
from pptx import Presentation
from pptx.util import Inches, Pt
import json
import os
import base64

def extract_pptx(file_path, output_dir):
    """
    Extract all content from a PowerPoint file.
    Returns a JSON structure with slides, text, and images.
    """
    prs = Presentation(file_path)
    slides_data = []

    # Create assets directory
    assets_dir = os.path.join(output_dir, 'assets')
    os.makedirs(assets_dir, exist_ok=True)

    for slide_num, slide in enumerate(prs.slides):
        slide_data = {
            'number': slide_num + 1,
            'title': '',
            'content': [],
            'images': [],
            'notes': ''
        }

        for shape in slide.shapes:
            # Extract title
            if shape.has_text_frame:
                if shape == slide.shapes.title:
                    slide_data['title'] = shape.text
                else:
                    slide_data['content'].append({
                        'type': 'text',
                        'content': shape.text
                    })

            # Extract images
            if shape.shape_type == 13:  # Picture
                image = shape.image
                image_bytes = image.blob
                image_ext = image.ext
                image_name = f"slide{slide_num + 1}_img{len(slide_data['images']) + 1}.{image_ext}"
                image_path = os.path.join(assets_dir, image_name)

                with open(image_path, 'wb') as f:
                    f.write(image_bytes)

                slide_data['images'].append({
                    'path': f"assets/{image_name}",
                    'width': shape.width,
                    'height': shape.height
                })

        # Extract notes
        if slide.has_notes_slide:
            notes_frame = slide.notes_slide.notes_text_frame
            slide_data['notes'] = notes_frame.text

        slides_data.append(slide_data)

    return slides_data
```

### Step 4.2: Confirm Content Structure

Present the extracted content to the user:

```
I've extracted the following from your PowerPoint:

**Slide 1: [Title]**
- [Content summary]
- Images: [count]

**Slide 2: [Title]**
- [Content summary]
- Images: [count]

...

All images have been saved to the assets folder.

Does this look correct? Should I proceed with style selection?
```

### Step 4.3: Style Selection

Proceed to Phase 2 (Style Discovery) with the extracted content in mind.

### Step 4.4: Generate HTML

Convert the extracted content into the chosen style, preserving:
- All text content
- All images (referenced from assets folder)
- Slide order
- Any speaker notes (as HTML comments or separate file)

---

## Phase 5: Delivery

### Final Output

When the presentation is complete:

1. **Clean up temporary files**
   - Delete `.claude-design/slide-previews/` if it exists

2. **Verify Candescent logo is present in header**

3. **Open the presentation**
   - Use `open [filename].html` to launch in browser

4. **Provide summary**
```
Your presentation is ready!

📁 File: [filename].html
🎨 Style: [Style Name]
📊 Slides: [count]

**Navigation:**
- Arrow keys (← →) or Space to navigate
- Scroll/swipe also works
- Click the dots on the right to jump to a slide

**To customize:**
- Colors: Look for `:root` CSS variables at the top
- Fonts: Change the Fontshare/Google Fonts link
- Animations: Modify `.reveal` class timings

Would you like me to make any adjustments?
```

---

## Style Reference: Effect → Feeling Mapping

Use this guide to match animations to intended feelings:

### Dramatic / Cinematic
- Slow fade-ins (1-1.5s)
- Large scale transitions (0.9 → 1)
- Dark backgrounds with spotlight effects
- Parallax scrolling
- Full-bleed images

### Techy / Futuristic
- Neon glow effects (box-shadow with accent color)
- Particle systems (canvas background)
- Grid patterns
- Monospace fonts for accents
- Glitch or scramble text effects
- Cyan, magenta, electric blue palette

### Playful / Friendly
- Bouncy easing (spring physics)
- Rounded corners (large radius)
- Pastel or bright colors
- Floating/bobbing animations
- Hand-drawn or illustrated elements

### Professional / Corporate
- Subtle, fast animations (200-300ms)
- Clean sans-serif fonts
- Navy, slate, or charcoal backgrounds
- Precise spacing and alignment
- Minimal decorative elements
- Data visualization focus

### Calm / Minimal
- Very slow, subtle motion
- High whitespace
- Muted color palette
- Serif typography
- Generous padding
- Content-focused, no distractions

### Editorial / Magazine
- Strong typography hierarchy
- Pull quotes and callouts
- Image-text interplay
- Grid-breaking layouts
- Serif headlines, sans-serif body
- Black and white with one accent

---

## Animation Patterns Reference

### Entrance Animations

```css
/* Fade + Slide Up (most common) */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s var(--ease-out-expo),
                transform 0.6s var(--ease-out-expo);
}

.visible .reveal {
    opacity: 1;
    transform: translateY(0);
}

/* Scale In */
.reveal-scale {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.6s, transform 0.6s var(--ease-out-expo);
}

/* Slide from Left */
.reveal-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.6s, transform 0.6s var(--ease-out-expo);
}

/* Blur In */
.reveal-blur {
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.8s, filter 0.8s var(--ease-out-expo);
}
```

### Background Effects

```css
/* Gradient Mesh */
.gradient-bg {
    background:
        radial-gradient(ellipse at 20% 80%, rgba(120, 0, 255, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(0, 255, 200, 0.2) 0%, transparent 50%),
        var(--bg-primary);
}

/* Noise Texture */
.noise-bg {
    background-image: url("data:image/svg+xml,..."); /* Inline SVG noise */
}

/* Grid Pattern */
.grid-bg {
    background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
}
```

### Interactive Effects

```javascript
/* 3D Tilt on Hover */
class TiltEffect {
    constructor(element) {
        this.element = element;
        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.perspective = '1000px';
        this.bindEvents();
    }

    bindEvents() {
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            this.element.style.transform = `
                rotateY(${x * 10}deg)
                rotateX(${-y * 10}deg)
            `;
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'rotateY(0) rotateX(0)';
        });
    }
}
```

---

## Style Presets Library

Curated visual styles for Frontend Slides. Each preset includes specific font choices, color palettes, and animation approaches to ensure distinctive, non-generic designs.

### 0. Candescent (Default)

**Vibe:** Experience-led, intelligent, professional fintech

**Typography:**
- Display: `Libre Baskerville` (700) — Classic authority with refinement
- Body: `Source Sans 3` (400/600) — Clean, highly readable

**Colors:**
```css
:root {
    --bg-primary: #0a0e17;
    --bg-secondary: #121827;
    --bg-tertiary: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --accent: #0ea5e9;
    --accent-light: #38bdf8;
    --accent-secondary: #06b6d4;
    --gold: #eab308;
    --gold-dim: rgba(234, 179, 8, 0.15);
    --border: rgba(148, 163, 184, 0.12);
}
```

**Font Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
```

**Signature Elements:** Candescent logo header, subtle gradient backgrounds, gold accent lines, clean data visualizations, generous whitespace, transparent header bar matching candescent.com

**Animation Style:** Smooth, confident (0.5-0.8s), fade + slide up entrances, staggered reveals, ease-out-expo easing

### Dark Themes

#### 1. Neon Cyber

**Vibe:** Futuristic, techy, confident, cutting-edge

**Typography:** Display `Clash Display` (700), Body `Satoshi` (400/500) — Fontshare

**Colors:**
```css
:root {
    --bg-primary: #0a0f1c;
    --bg-secondary: #111827;
    --text-primary: #ffffff;
    --text-secondary: #94a3b8;
    --accent: #00ffcc;
    --accent-secondary: #ff00aa;
    --glow: rgba(0, 255, 204, 0.4);
}
```

**Signature Elements:** Particle system background, neon glow, custom cursor with trail, grid pattern overlay, glitch text effect on titles

**Animation Style:** Medium speed (0.5-0.8s), slide up + fade, staggered reveals

#### 2. Midnight Executive

**Vibe:** Premium, trustworthy, sophisticated, corporate

**Typography:** Display `Libre Baskerville` (700), Body `Source Sans 3` (400/600)

**Colors:**
```css
:root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent: #3b82f6;
    --accent-secondary: #818cf8;
    --gold: #fbbf24;
}
```

**Signature Elements:** Subtle gradient backgrounds, thin gold accent lines, data visualizations, minimal decorative elements, focus on whitespace

**Animation Style:** Fast, subtle (0.3-0.5s), fade only, professional restraint

#### 3. Deep Space

**Vibe:** Inspiring, vast, contemplative, visionary

**Typography:** Display `Space Grotesk` (700), Body `DM Sans` (400/500)

**Colors:**
```css
:root {
    --bg-primary: #030712;
    --bg-secondary: #111827;
    --text-primary: #f9fafb;
    --text-secondary: #6b7280;
    --accent: #818cf8;
    --accent-secondary: #c084fc;
    --stars: rgba(255, 255, 255, 0.1);
}
```

**Signature Elements:** Starfield background, radial gradient spotlight effects, floating elements, large impactful typography, generous vertical spacing

**Animation Style:** Slow, cinematic (0.8-1.2s), scale + fade, parallax scrolling

#### 4. Terminal Green

**Vibe:** Developer-focused, hacker aesthetic, retro-tech

**Typography:** `JetBrains Mono` (400/700) throughout

**Colors:**
```css
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --accent: #39d353;
    --accent-dim: rgba(57, 211, 83, 0.2);
    --border: #30363d;
}
```

**Signature Elements:** Scan line overlay, blinking cursor, code blocks, ASCII art decorations, terminal-style borders

**Animation Style:** Typewriter reveals, quick snappy transitions (0.2-0.3s), character-by-character reveals

### Light Themes

#### 5. Paper & Ink

**Vibe:** Editorial, literary, thoughtful, refined

**Typography:** Display `Cormorant Garamond` (700), Body `Source Serif 4` (400)

**Colors:**
```css
:root {
    --bg-primary: #faf9f7;
    --bg-secondary: #f5f3ef;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --accent: #c41e3a;
    --border: #e5e2db;
}
```

**Signature Elements:** Drop caps, pull quotes, subtle paper texture, elegant horizontal rules, classic column layouts

**Animation Style:** Gentle fades (0.4-0.6s), no dramatic movements, refined and understated

#### 6. Swiss Modern

**Vibe:** Clean, precise, Bauhaus-inspired, geometric

**Typography:** Display `Archivo` (800), Body `Nunito` (400/600)

**Colors:**
```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f7f7f7;
    --text-primary: #000000;
    --text-secondary: #555555;
    --accent: #ff3300;
    --grid: rgba(0, 0, 0, 0.05);
}
```

**Signature Elements:** Visible grid system, asymmetric layouts, red accent sparingly, bold black typography, geometric shapes

**Animation Style:** Precise, mechanical (0.3-0.4s), linear or ease-out, grid-aligned movements

#### 7. Soft Pastel

**Vibe:** Friendly, approachable, creative, playful

**Typography:** `Nunito` (400/500/800) throughout

**Colors:**
```css
:root {
    --bg-primary: #fef3f2;
    --bg-secondary: #fef9f5;
    --text-primary: #374151;
    --text-secondary: #6b7280;
    --accent: #f472b6;
    --accent-secondary: #a78bfa;
    --accent-tertiary: #34d399;
}
```

**Signature Elements:** Rounded corners, blob shapes, multiple pastel accents, soft shadows, illustrated icons

**Animation Style:** Bouncy spring physics, playful overshoots, floating/bobbing elements

#### 8. Warm Editorial

**Vibe:** Human, storytelling, photographic, magazine

**Typography:** Display `Playfair Display` (700), Body `Work Sans` (400)

**Colors:**
```css
:root {
    --bg-primary: #fffbf5;
    --bg-secondary: #f5efe6;
    --text-primary: #2d2a24;
    --text-secondary: #78716c;
    --accent: #b45309;
    --accent-secondary: #0369a1;
}
```

**Signature Elements:** Large hero images, image overlays with text, warm photography, pull quotes in accent color, handwritten accent fonts

**Animation Style:** Cinematic crossfades, Ken Burns effect on images, slow emotional transitions (0.8-1s)

### Specialty Themes

#### 9. Brutalist

**Vibe:** Raw, bold, unconventional, attention-grabbing

**Typography:** Display `Anton` or `Bebas Neue` (900), Body `IBM Plex Mono` (400)

**Colors:**
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    --accent: #ff0000;
    --border: #000000;
}
```

**Signature Elements:** Thick black borders, asymmetric chaotic layouts, oversized typography, raw unpolished look, high contrast

**Animation Style:** Instant or very fast, hard cuts, jarring transitions

#### 10. Gradient Wave

**Vibe:** Modern SaaS, energetic, approachable tech

**Typography:** Display `Cabinet Grotesk` (800), Body `Inter` (400/500) — Inter only allowed for this style

**Colors:**
```css
:root {
    --bg-primary: #0f0f1a;
    --gradient-1: #667eea;
    --gradient-2: #764ba2;
    --gradient-3: #f472b6;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
}
```

**Signature Elements:** Animated gradient meshes, blob shapes with blur, glass-morphism cards, floating orbs, smooth curves

**Animation Style:** Smooth, flowing (0.5-0.7s), continuous subtle animations, hover reveals

### Font Pairing Quick Reference

| Vibe | Display Font | Body Font | Source |
|------|--------------|-----------|--------|
| **Candescent (Default)** | Libre Baskerville | Source Sans 3 | Google |
| Techy/Modern | Clash Display | Satoshi | Fontshare |
| Professional | Libre Baskerville | Source Sans 3 | Google |
| Space/Future | Space Grotesk | DM Sans | Google |
| Developer | JetBrains Mono | JetBrains Mono | JetBrains |
| Editorial | Cormorant Garamond | Source Serif 4 | Google |
| Swiss/Minimal | Archivo | Nunito | Google |
| Playful | Nunito | Nunito | Google |
| Magazine | Playfair Display | Work Sans | Google |
| Brutalist | Anton | IBM Plex Mono | Google |
| SaaS Modern | Cabinet Grotesk | Inter | Fontshare/Google |

### Animation Easing Reference

```css
:root {
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-snappy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Background Effect Snippets

**Particle Field (Canvas):**
```javascript
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.init();
    }
    init() {
        this.resize();
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
        this.animate();
    }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 255, 204, 0.5)';
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
}
```

**Gradient Mesh (CSS):**
```css
.gradient-mesh {
    background:
        radial-gradient(at 40% 20%, hsla(280, 100%, 70%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(200, 100%, 60%, 0.3) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(340, 100%, 70%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(180, 100%, 50%, 0.2) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(250, 100%, 60%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(20, 100%, 60%, 0.2) 0px, transparent 50%),
        var(--bg-primary);
}
```

**Animated Starfield (CSS):**
```css
.starfield {
    background-image:
        radial-gradient(2px 2px at 20% 30%, white 0%, transparent 50%),
        radial-gradient(2px 2px at 40% 70%, white 0%, transparent 50%),
        radial-gradient(1px 1px at 50% 40%, white 0%, transparent 50%),
        radial-gradient(1px 1px at 60% 60%, white 0%, transparent 50%),
        radial-gradient(2px 2px at 90% 10%, white 0%, transparent 50%);
    background-size: 200% 200%;
    animation: twinkle 15s ease-in-out infinite;
}
@keyframes twinkle {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
}
```

**Noise Texture (SVG Data URI):**
```css
.noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
}
```

### DO NOT USE (Generic AI Patterns)

Avoid these overused patterns that create "AI slop":

**Fonts:** Inter (except Gradient Wave style), Roboto, Arial/Helvetica, system font stacks as display fonts

**Colors:** `#6366f1` generic indigo, purple/violet gradients on white, generic blue primary buttons, equal distribution of accent colors

**Layouts:** Centered everything, generic hero with text left/image right, standard 3-column features grid, rounded rectangle cards with shadows

**Animations:** Identical timing on all elements, no stagger on children, linear easing everywhere, excessive bounce

**Effects:** Drop shadows without intention, gratuitous glassmorphism, blurs that don't add meaning, gradients for no reason

---

## Troubleshooting

### Common Issues

**Fonts not loading:**
- Check Fontshare/Google Fonts URL
- Ensure font names match in CSS

**Animations not triggering:**
- Verify Intersection Observer is running
- Check that `.visible` class is being added

**Scroll snap not working:**
- Ensure `scroll-snap-type` on html/body
- Each slide needs `scroll-snap-align: start`

**Mobile issues:**
- Disable heavy effects at 768px breakpoint
- Test touch events
- Reduce particle count or disable canvas

**Performance issues:**
- Use `will-change` sparingly
- Prefer `transform` and `opacity` animations
- Throttle scroll/mousemove handlers

---

## Example Session Flow

1. User: "I want to create a pitch deck for my AI startup"
2. Skill asks about purpose, length, content
3. User shares their bullet points and key messages
4. Skill asks about desired feeling (Impressed + Excited)
5. Skill generates 3 style previews (Candescent is always offered as default)
6. User confirms Candescent (default) or picks another style
7. Skill generates full presentation with Candescent logo header
8. Skill opens the presentation in browser
9. User requests tweaks to specific slides
10. Final presentation delivered with embedded logo

---

## Conversion Session Flow

1. User: "Convert my slides.pptx to a web presentation"
2. Skill extracts content and images from PPT
3. Skill confirms extracted content with user
4. Skill asks about desired feeling/style
5. Skill generates style previews
6. User picks a style
7. Skill generates HTML presentation with preserved assets
8. Final presentation delivered
