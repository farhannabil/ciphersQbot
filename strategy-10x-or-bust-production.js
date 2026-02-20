// ========================================
// 10x OR BUST - LIMBO STRATEGY (PRODUCTION)
// ========================================
// Goal: Turn $50 → $500 in single bet
// Budget: $250 total (5 sessions of $50)
// Win chance: 9.9% per session
// Success probability: 41% (at least 1 win in 5 tries)
// ========================================

game = "limbo"
target = 10.00  // 10x multiplier
sessionBankroll = 50  // $50 per session
nextbet = sessionBankroll  // All-in every session

// Session tracking
sessionNumber = 1
totalSessions = 5
totalCapital = 250

// Statistics
startTime = Date.now()
sessionStartTime = Date.now()

dobet = function() {
  if (win) {
    // SUCCESS!
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let profit = nextbet * target - nextbet

    log("════════════════════════════════════════")
    log("🎉🎉🎉 10x HIT! SESSION " + sessionNumber + " SUCCESS! 🎉🎉🎉")
    log("════════════════════════════════════════")
    log("💰 Bet amount: $" + nextbet.toFixed(2))
    log("💰 Payout: $" + (nextbet * target).toFixed(2))
    log("💰 Profit: $" + profit.toFixed(2))
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("📊 Win on attempt: " + sessionNumber + " / " + totalSessions)
    log("")
    log("💵 ACTION REQUIRED: Cash out $500 now!")
    log("🔄 To continue: Reset bot and start fresh session with $50")
    log("════════════════════════════════════════")

    stop()

  } else {
    // LOSS
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000

    log("════════════════════════════════════════")
    log("❌ Session " + sessionNumber + " LOST (-$50)")
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("════════════════════════════════════════")

    if (sessionNumber >= totalSessions) {
      // ALL 5 SESSIONS EXHAUSTED
      let totalTime = (Date.now() - startTime) / 1000

      log("")
      log("🛑🛑🛑 ALL SESSIONS EXHAUSTED 🛑🛑🛑")
      log("════════════════════════════════════════")
      log("📊 Sessions attempted: " + totalSessions)
      log("📊 Sessions won: 0")
      log("📊 Sessions lost: " + totalSessions)
      log("💸 Total loss: -$" + totalCapital.toFixed(2))
      log("⏱️  Total time: " + (totalTime / 60).toFixed(1) + " minutes")
      log("")
      log("🔄 To try again: Deposit more funds and restart")
      log("⚠️  Note: 5 losses in a row has ~59% probability")
      log("════════════════════════════════════════")

      stop()

    } else {
      // PREPARE NEXT SESSION
      sessionNumber++
      let remaining = totalSessions - sessionNumber + 1
      let capitalRemaining = remaining * sessionBankroll

      log("")
      log("🔄 READY FOR SESSION " + sessionNumber)
      log("════════════════════════════════════════")
      log("💪 Remaining attempts: " + remaining)
      log("💵 Capital remaining: $" + capitalRemaining.toFixed(2))
      log("📊 Probability of winning at least once: " + (100 * (1 - Math.pow(0.901, remaining))).toFixed(1) + "%")
      log("")
      log("▶️  Click START to place next $50 bet")
      log("════════════════════════════════════════")

      sessionStartTime = Date.now()  // Reset session timer
      stop()  // User must manually click Start for next session
    }
  }
}

// Display initial status
log("════════════════════════════════════════")
log("🎰 10x OR BUST - LIMBO STRATEGY")
log("════════════════════════════════════════")
log("💰 Bet per session: $" + sessionBankroll.toFixed(2))
log("🎯 Target multiplier: " + target.toFixed(2) + "x")
log("💵 Target profit per win: $" + (sessionBankroll * target - sessionBankroll).toFixed(2))
log("📊 Total sessions: " + totalSessions)
log("📊 Total capital: $" + totalCapital.toFixed(2))
log("")
log("📈 Win chance per session: 9.9%")
log("📈 Probability of at least 1 win: 41%")
log("📈 Expected attempts to first win: 10.1")
log("")
log("▶️  Click START to begin Session 1")
log("════════════════════════════════════════")
