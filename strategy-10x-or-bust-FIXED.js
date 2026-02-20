// ========================================
// 10x OR BUST - FIXED VERSION (Uses actual balance)
// ========================================
// IMPORTANT: This version reads your ACTUAL Stake balance
// and bets a percentage of it (not fixed dollar amounts)
// ========================================

game = "limbo"
target = 10.00  // 10x multiplier

// ⚠️ CONFIGURE THIS - What % of balance to bet per session
betPercentage = 0.20  // 20% of your balance (adjust as needed)

// Session tracking
sessionNumber = 1
totalSessions = 5
startingBalance = 0

// Statistics
startTime = Date.now()
sessionStartTime = Date.now()

dobet = function() {

  // First bet: record starting balance
  if (sessionNumber === 1 && bets === 0) {
    startingBalance = balance
    log("🔍 Detected balance: " + balance.toFixed(8) + " crypto")
    log("💰 Will bet " + (betPercentage * 100) + "% = " + (balance * betPercentage).toFixed(8))
  }

  // Calculate bet amount as % of CURRENT balance
  nextbet = balance * betPercentage

  // Safety check: don't bet if balance too low
  if (nextbet < 0.00000001) {
    log("⛔ ERROR: Balance too low to bet!")
    log("Current balance: " + balance.toFixed(8))
    stop()
    return
  }

  if (win) {
    // SUCCESS!
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let profitAmount = previousbet * target - previousbet
    let totalProfit = balance - startingBalance

    log("════════════════════════════════════════")
    log("🎉🎉🎉 10x HIT! SESSION " + sessionNumber + " SUCCESS! 🎉🎉🎉")
    log("════════════════════════════════════════")
    log("💰 Bet amount: " + previousbet.toFixed(8) + " crypto")
    log("💰 Payout: " + (previousbet * target).toFixed(8) + " crypto")
    log("💰 Profit this round: " + profitAmount.toFixed(8) + " crypto")
    log("💵 Total profit: " + totalProfit.toFixed(8) + " crypto")
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("📊 Win on attempt: " + sessionNumber + " / " + totalSessions)
    log("")
    log("💵 ACTION REQUIRED: Cash out now!")
    log("🛑 STOP PLAYING - You won!")
    log("════════════════════════════════════════")

    stop()

  } else {
    // LOSS
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let totalLost = startingBalance - balance

    log("════════════════════════════════════════")
    log("❌ Session " + sessionNumber + " LOST")
    log("💸 Lost: " + previousbet.toFixed(8) + " crypto")
    log("💸 Total lost: " + totalLost.toFixed(8) + " crypto")
    log("💰 Balance remaining: " + balance.toFixed(8) + " crypto")
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("════════════════════════════════════════")

    if (sessionNumber >= totalSessions) {
      // ALL SESSIONS EXHAUSTED
      let totalTime = (Date.now() - startTime) / 1000
      let finalLoss = startingBalance - balance

      log("")
      log("🛑🛑🛑 ALL " + totalSessions + " SESSIONS EXHAUSTED 🛑🛑🛑")
      log("════════════════════════════════════════")
      log("📊 Sessions attempted: " + totalSessions)
      log("📊 Sessions won: 0")
      log("📊 Sessions lost: " + totalSessions)
      log("💸 Total loss: " + finalLoss.toFixed(8) + " crypto")
      log("💸 Started with: " + startingBalance.toFixed(8))
      log("💸 Ended with: " + balance.toFixed(8))
      log("⏱️  Total time: " + (totalTime / 60).toFixed(1) + " minutes")
      log("")
      log("⚠️  Note: " + totalSessions + " losses in a row = " + ((Math.pow(0.901, totalSessions) * 100).toFixed(1)) + "% probability")
      log("════════════════════════════════════════")

      stop()

    } else {
      // PREPARE NEXT SESSION
      sessionNumber++
      let remaining = totalSessions - sessionNumber + 1
      let winProbability = (1 - Math.pow(0.901, remaining)) * 100

      log("")
      log("🔄 READY FOR SESSION " + sessionNumber)
      log("════════════════════════════════════════")
      log("💪 Remaining attempts: " + remaining)
      log("💰 Current balance: " + balance.toFixed(8) + " crypto")
      log("💰 Next bet will be: " + (balance * betPercentage).toFixed(8) + " crypto")
      log("📊 Probability of winning at least once: " + winProbability.toFixed(1) + "%")
      log("")
      log("▶️  Click START to place next bet")
      log("════════════════════════════════════════")

      sessionStartTime = Date.now()  // Reset session timer
      stop()  // User must manually click Start for next session
    }
  }
}

// Display initial status
log("════════════════════════════════════════")
log("🎰 10x OR BUST - AUTO-DETECT BALANCE")
log("════════════════════════════════════════")
log("🎯 Target multiplier: " + target.toFixed(2) + "x")
log("💰 Bet per session: " + (betPercentage * 100) + "% of balance")
log("📊 Total sessions: " + totalSessions)
log("")
log("📈 Win chance per session: 9.9%")
log("📈 Probability of at least 1 win: " + ((1 - Math.pow(0.901, totalSessions)) * 100).toFixed(1) + "%")
log("")
log("⚠️  IMPORTANT: Bot will auto-detect your balance")
log("⚠️  First bet will be " + (betPercentage * 100) + "% of your current balance")
log("")
log("▶️  Click START to begin")
log("════════════════════════════════════════")
