# How to Work from Different Computers (Windows ↔ Mac)

Since your code is backed up on GitHub, you can switch between computers easily. Here is your cheat sheet.

## 1. Before you leave... (SAVE your work)
Whenever you finish working on a computer (Windows or Mac), run these 3 commands to save your changes to the cloud:

```bash
git add .
git commit -m "Saving my latest work"
git push
```
*(If you don't do this, your latest work won't show up on the other computer!)*

---

## 2. When you arrive... (LOAD your work)
When you sit down at the other computer (e.g., at the coffee shop), run this command **before you start working**:

```bash
git pull
```
*(This downloads the latest changes handled in step 1.)*

---

## 3. Start Coding
After you `git pull`, just start the server like normal:

```bash
npm run dev
```
