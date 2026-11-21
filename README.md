# Steady Quest

A mission and iteration based study planner for UP Board Class 10 (2027).
Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

- `index.html` : page structure
- `style.css` : styles (light and dark mode)
- `app.js` : all logic and the syllabus data
- `vercel.json` : minimal Vercel config

## Run locally

Open `index.html` in a browser. Progress is saved in your browser's localStorage.

## Deploy to Vercel through GitHub

1. Create a new empty repository on GitHub.
2. In this folder, run:

   ```
   git init
   git add .
   git commit -m "Steady Quest"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/steady-quest.git
   git push -u origin main
   ```

3. Go to vercel.com, click **Add New > Project**, and import the repository.
4. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.

Every `git push` after that redeploys automatically.

## Customise

Edit `app.js`:

- `MS` : the missions, their iterations and tasks (each task is `"SUBJECT:text"`)
- `ITT` : the iteration methods (Learn, Mind-Map Mania, Speed Racer and so on)
- `EX` : the date of your first exam
- `ph` inside `ld()` : default phase deadlines

If you change the task list, change `K` (the storage key, for example `steady-quest-v5`) so old saved progress does not mix with the new list.

## Notes

- Progress is stored per browser and per site address. It does not sync between devices.
- The page can only nag while it is open. The Google Calendar button creates a daily event that rings on your phone when the page is closed.
- Check final exam dates on upmsp.edu.in.
