# 10x OR BUST - STRATEGY IMPLEMENTATION GUIDE

## 📋 Quick Reference

**Strategy:** Limbo 10x All-In
**Goal:** Turn $50 → $500 in single bet
**Success Rate:** 41% (with 5 attempts)
**Risk:** 59% chance of losing entire $250 budget

---

## 📁 Files Included

1. **strategy-10x-or-bust-stage1-test.js** - Test version ($1 bets)
2. **strategy-10x-or-bust-stage2-test.js** - Conservative version ($5 bets, 10 attempts)
3. **strategy-10x-or-bust-production.js** - Full production version ($50 bets, 5 attempts)

---

## 🚀 Implementation Steps

### Step 1: Open ciphersQbot Extension

1. Open Stake.com in Chrome browser
2. Click the ciphersQbot extension icon (top-right of browser)
3. Navigate to the **"Script"** tab
4. Clear any existing code in the editor

### Step 2: Choose Your Version

#### Option A: Stage 1 Test (RECOMMENDED FIRST)
- **File:** `strategy-10x-or-bust-stage1-test.js`
- **Risk:** $5 total ($1 per session)
- **Purpose:** Verify bot functionality
- **Use when:** First time using the bot

#### Option B: Stage 2 Test (RECOMMENDED SECOND)
- **File:** `strategy-10x-or-bust-stage2-test.js`
- **Risk:** $50 total ($5 per session, 10 attempts)
- **Purpose:** Test with real money, reduced risk
- **Win probability:** 65%
- **Use when:** After Stage 1 success

#### Option C: Production (ONLY AFTER STAGES 1 & 2)
- **File:** `strategy-10x-or-bust-production.js`
- **Risk:** $250 total ($50 per session, 5 attempts)
- **Purpose:** Full "go big or go home" strategy
- **Win probability:** 41%
- **Use when:** You're ready for high-risk play

### Step 3: Copy-Paste Code

1. Open the chosen `.js` file in a text editor
2. Select all code (Ctrl+A or Cmd+A)
3. Copy (Ctrl+C or Cmd+C)
4. Paste into ciphersQbot Script tab (Ctrl+V or Cmd+V)

### Step 4: Verify Settings

**Before clicking Start, check:**
- ✅ Game shows "limbo" in the code
- ✅ Target shows 10.00 (not 2.00 or other value)
- ✅ sessionBankroll matches the version you chose
  - Stage 1: sessionBankroll = 1
  - Stage 2: sessionBankroll = 5
  - Production: sessionBankroll = 50
- ✅ Your Stake balance is sufficient

### Step 5: Run the Strategy

1. Click **"Start"** button in ciphersQbot
2. Bot will place single bet immediately
3. Result appears within 1-2 seconds
4. Bot stops automatically after each session
5. Read the log messages to see the outcome

### Step 6: After Each Session

**If you WIN:**
- 🎉 Celebrate!
- 💰 Cash out immediately (withdraw from Stake)
- 🛑 STOP PLAYING (do not continue)
- 📊 You beat the odds - don't push your luck

**If you LOSE:**
- 😞 Accept the loss
- 📊 Check remaining attempts in the log
- 🤔 Decide: Continue or stop?
- ▶️ If continuing: Click "Start" again for next session

---

## ⚙️ Configuration Options

### Adjust Bet Amount

To change the bet amount, modify this line:
```javascript
sessionBankroll = 50  // Change this number
```

**Examples:**
- $10 sessions: `sessionBankroll = 10`
- $100 sessions: `sessionBankroll = 100`
- $5 sessions: `sessionBankroll = 5`

### Adjust Number of Sessions

To change total attempts, modify this line:
```javascript
totalSessions = 5  // Change this number
```

**Examples:**
- 10 attempts: `totalSessions = 10` (65% success rate)
- 20 attempts: `totalSessions = 20` (88% success rate)
- 3 attempts: `totalSessions = 3` (27% success rate)

### Adjust Target Multiplier

To change the payout target, modify this line:
```javascript
target = 10.00  // Change this number
```

**Examples:**
- 20x multiplier: `target = 20.00` (4.95% win chance)
- 5x multiplier: `target = 5.00` (19.8% win chance)
- 100x multiplier: `target = 100.00` (0.99% win chance)

**⚠️ WARNING:** Changing the target changes the win probability!
- Higher target = Lower win chance
- Lower target = Higher win chance

---

## 📊 Expected Outcomes

### Stage 1 Test ($1 bets, 5 sessions)
```
Budget: $5
Win chance: 41%
If win: ~$9 profit (after $1-5 investment)
If lose: -$5 total loss
Purpose: Verify bot works
```

### Stage 2 Test ($5 bets, 10 sessions)
```
Budget: $50
Win chance: 65%
If win: ~$40 profit (average)
If lose: -$50 total loss
Purpose: Real money test
```

### Production ($50 bets, 5 sessions)
```
Budget: $250
Win chance: 41%
If win: +$300-450 profit (depending on which session wins)
If lose: -$250 total loss
Purpose: "Go big or go home"
```

---

## ⚠️ Critical Warnings

### Before You Start

**Ask yourself these questions:**

1. **Can I afford to lose this money completely?**
   - If NO → Do not use production version
   - If YES → Proceed with caution

2. **Will I actually stop if I win?**
   - If NO → You will likely lose everything
   - If YES → Good, follow the plan

3. **Am I doing this for entertainment or desperation?**
   - Entertainment → Okay
   - Desperation → DO NOT GAMBLE

4. **Do I understand this is pure luck?**
   - If NO → Read the plan again
   - If YES → Good mindset

5. **Will I chase losses if I lose?**
   - If YES → You will lose more money
   - If NO → Good, stick to the plan

### Gambling Addiction Resources

If you find yourself:
- Unable to stop after losing
- Betting money you can't afford to lose
- Chasing losses with more deposits
- Lying to others about your gambling
- Feeling anxious or depressed about gambling

**→ SEEK HELP IMMEDIATELY:**
- 🇺🇸 USA: 1-800-GAMBLER (1-800-426-2537)
- 🌐 International: https://www.ncpgambling.org/help-treatment/help-by-state/

---

## 🔧 Troubleshooting

### Error: "Amount too small"
**Problem:** Bet amount is below Stake's minimum
**Solution:** Increase `sessionBankroll` to at least 0.00001 in crypto

### Error: Bot doesn't stop after win
**Problem:** Code error or edge case
**Solution:** Manually click "Stop" button

### Error: Balance doesn't update
**Problem:** Page needs refresh
**Solution:** Refresh Stake.com page, restart bot

### Error: Multiple bets placed
**Problem:** Fast mode enabled
**Solution:** Disable fast mode in settings

### Error: "Rate limited by API"
**Problem:** Too many requests to Stake API
**Solution:** Wait 60 seconds, try again

### Bot starts but nothing happens
**Problem:** Game name incorrect or not available
**Solution:** Verify Limbo game is available on your Stake region

---

## 📈 Success Probability Calculator

Use this to calculate your success probability for different session counts:

**Formula:**
```
P(at least 1 win) = 1 - (0.901)^sessions
```

**Examples:**
- 1 session: 9.9% chance
- 3 sessions: 27.1% chance
- 5 sessions: 41.0% chance
- 10 sessions: 64.9% chance
- 20 sessions: 87.6% chance
- 50 sessions: 99.1% chance

**Cost calculation:**
```
Total cost = sessionBankroll × sessions
```

**Examples:**
- 5 × $50 = $250
- 10 × $50 = $500
- 20 × $50 = $1,000

---

## 💡 Strategy Tips

### Maximizing Success Probability

**Option 1: Increase sessions**
- More attempts = higher success rate
- But costs more money
- Example: 20 sessions = 88% success rate but $1,000 risk

**Option 2: Lower target multiplier**
- Lower multiplier = higher win chance per session
- But smaller profit per win
- Example: 5x target = 19.8% win chance (vs 9.9% for 10x)

**Option 3: Combine both**
- More sessions + lower target = very high success rate
- Example: 20 sessions at 5x target = near certainty
- But profit might not justify the effort

### Risk Management

**Conservative Approach:**
- Start with Stage 1 test ($1 bets)
- Graduate to Stage 2 test ($5 bets, 10 sessions)
- Only use production if you can afford total loss

**Aggressive Approach:**
- Skip testing, go straight to production
- High risk, high reward
- Only for experienced gamblers

**Recommended:**
- Use Stage 2 test version permanently
- $5 sessions, 10 attempts = 65% success rate
- Lower risk, still decent profit potential

---

## 📝 Usage Checklist

**Before Each Session:**
- [ ] Read all warnings and understand risks
- [ ] Verify you can afford to lose the money
- [ ] Check your Stake balance is sufficient
- [ ] Verify correct code is pasted in Script tab
- [ ] Read through the code and understand what it does

**After Each Session:**
- [ ] Read the log messages
- [ ] Record the outcome (win/loss, session number)
- [ ] Decide: Continue or stop?
- [ ] If win: Cash out immediately
- [ ] If lose: Don't chase losses

**After All Sessions:**
- [ ] Calculate total profit/loss
- [ ] Reflect on the experience
- [ ] Decide: Will you do this again?
- [ ] If you won: Celebrate and stop
- [ ] If you lost: Accept and move on

---

## 📞 Support

**Where to get help:**
- ciphersQbot GitHub: https://github.com/farhannabil/ciphersQbot
- Stake support: https://stake.com/support
- Discord: Check README.md for invite link
- Plan file: `C:\Users\arcan\.claude\plans\cozy-exploring-candy.md`

**Important:**
- This is not financial advice
- Past results don't guarantee future results
- Expected value is always negative (house edge)
- You are gambling, not investing

---

## 🎯 Final Checklist

**Before using production version:**
- [ ] Completed Stage 1 test successfully
- [ ] Completed Stage 2 test successfully
- [ ] Understand 59% chance of total loss
- [ ] Can afford to lose $250
- [ ] Will stop after winning once
- [ ] Will not chase losses
- [ ] Read all warnings in the plan file
- [ ] Mentally prepared for variance

**If all boxes checked:**
✅ You're ready to use the production version

**If any box unchecked:**
❌ Use Stage 2 test version instead

---

## 📖 Additional Resources

- **Full Plan:** `C:\Users\arcan\.claude\plans\cozy-exploring-candy.md`
- **ciphersQbot README:** `C:\Users\arcan\ciphersQbot\README.md`
- **Stake Verification:** https://stake.com/provably-fair
- **Card Counting Doc:** `TEST_4_Card_Counting_Tab_Agent (1).md`

---

**Good luck! 🎰**

Remember: This is entertainment with a 41% win rate, not an income strategy.
