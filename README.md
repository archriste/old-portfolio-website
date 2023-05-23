# archriste.github.io
My main portfolio website. Welcome!<br>
If you find any issues or ideas for fixing them (or suggestions for content), please email me!
I would love to learn from you. **alain@christe.co**
## Introduction 📌
My philosophy for designing this website is to use a variety of different tools to demonstrate what
I've learned about web development so far. I intend to implement React for further functionality, add 
more content such as a blog, and periodically update my selected projects as I complete them.
## Features 🚀
The main page was developed with jQuery and Tailwind.<br><br>
In order of appearance, from top scrolling down:
- Hero section with fixed position, title, and button at the bottom to scroll to the first section
- Navbar that appears at the top of the content until the user scrolls past, at which point it sticks
to the top of the page for easy navigation. Background is a monochrome frosted glass effect.
- Navbar buttons that display an appropriate color when hovered over and become larger when the scroll
position is inside their respective section.
- About me page with a brief overview of my take on software and links to other content.
- Links to contact section and blog pulse slightly to indicate interactivity to the user.
- Project page with responsive grid for displaying projects. Project boxes glow slightly and provide a
brief description with links on hover.
- Contact page with fixed background effect on grid elements. Includes a link to my resume.

## To-do list 💭
- Implement React
- Add light/dark mode toggle
- Provide multilingual support (English, Spanish) based on user locale, with navbar button to toggle between languages.
- Beautify project grid with React, allowing user to see even more information about the projects or even
allow for code snippets to run within the website
- Improve performance and mobile functionality across the board
- Develop blog

## Known issues 🔧
Unless otherwise specified, I am running mobile testing on my own device, an iPhone 11 Pro Max.
I am running iOS 16.3.1, Chrome 113.0.5672.69, and Firefox 113.0 (30633).<br>
- **Mobile (All)** Animations appear laggy<br>
*Potential fix:* Replace current animations with mobile-friendly versions, possibly using frameworks
to improve performance or using browser-specific settings. Evaluate performance impact of different effects
and potentially remove culprits with media queries.
- **Mobile (All)** Content doesn't fill landscape mode width<br>
*Potential fix:* Change width settings, possibly replacing max-w-full. Needs research.
- **Mobile (All)** Navbar buttons affect each other when transformed with scale.<br>
*Potential fix:* Make only the text increase in size and prevent button size from changing, either with
text positioning or flex properties.
- **Mobile (All)** Background effect on contact grid doesn't work on mobile.<br>
*Potential fix:* Research mobile-friendly ways of producing the effect, maybe by changing the background
from being property-defined to an intermediate div layer as if trying to create a parallax effect.
- **Mobile (Chrome, Firefox)** Overscroll is ignored at the bottom of the page. Firefox overscrolls by a few
units while Chrome overscrolls by an entire device height.<br>
*Potential fix:* Research browser-specific overscroll settings or redo element positioning to ensure that
the bottom of the content is the bottom of the page.
