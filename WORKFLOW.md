# Syncing Workflow Cheat Sheet

## 1. Leaving Windows (Save work)
Open Terminal and run:
```bash
cd .gemini\antigravity\scratch\pt-edu-platform
git add .
git commit -m "saving work from pc"
git push
```

## 2. Arriving at Coffee Shop / Mac (Load work)
Open Terminal and run:
```bash
cd pt-edu-platform
git pull
npm run dev
```

---

## 3. Leaving Coffee Shop / Mac (Save work)
Open Terminal and run:
```bash
cd pt-edu-platform
git add .
git commit -m "saving work from mac"
git push
```

## 4. Arriving back at Windows (Load work)
Open Terminal and run:
```bash
cd .gemini\antigravity\scratch\pt-edu-platform
git pull
npm run dev
```
