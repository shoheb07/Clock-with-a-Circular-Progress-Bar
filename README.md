# Clock-with-a-Circular-Progress-Bar
Clock with a Circular Progress Bar using HTML, CSS, and JavaScript. It shows hours, minutes, and seconds visually as progress rings.

# ⏱️ Progress Clock (HTML, CSS, JavaScript)

## 📌 Overview
This project is a live clock with circular progress bars that visually represent hours, minutes, and seconds using animated SVG rings. It combines a digital clock display with modern UI elements for better visualization.

## 🚀 Features
- Real-time clock (updates every second)
- Circular progress indicators for:
  - Hours
  - Minutes
  - Seconds
- Smooth animation using SVG stroke properties
- Responsive and clean UI design
- Lightweight (no external libraries)


## 🛠️ Technologies Used
- HTML5 – Structure
- CSS3 – Styling and layout
- JavaScript (Vanilla JS) – Logic and real-time updates
- SVG – Circular progress animation

## 📂 Project Structure
progress-clock/
│ ├── index.html     # Main HTML structure 
├── style.css      # Styling and layout 
├── script.js      


## ⚙️ How It Works
1. The clock uses the JavaScript Date object to fetch current time.
2. Time values (hours, minutes, seconds) are converted into percentages.
3. SVG circles use:
   - stroke-dasharray → total circle length
   - stroke-dashoffset → controls progress
4. The progress rings update every second using setInterval().


## ▶️ How to Run
1. Download or copy the project files.
2. Open index.html in any web browser.
3. The clock will start automatically.


## 📸 Output Description
- Three circular rings are displayed:
  - Outer ring → Seconds
  - Middle ring → Minutes
  - Inner ring → Hours
- Each ring fills progressively as time passes.
- Digital time is shown at the center of each ring.


## 🔧 Customization
You can easily modify:
- Colors → Change stroke in CSS
- Size → Adjust SVG width/height
- Speed → Modify update interval
- Format → Convert to 12-hour (AM/PM)


## 💡 Future Enhancements
- Add date display (day, month, year)
- Dark/Light mode toggle
- Gradient progress rings
- Sound or alarm feature
- Timezone selection


## 📜 License
This project is free to use for learning and personal projects.


## 👨‍💻 Author
Created as a simple front-end project to demonstrate **real-time animation using JavaScript and S
